import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment'; 
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {IMyOptions, IMyDpOptions, IMyDate, IMyDateModel} from 'mydatepicker';
import { Episode } from './episode';
import { EpisodeService } from './episode.service';
import { ErrorTextPipe, FilterArrayPipe } from './common.pipes';

@Component({
	selector: 'app-root',
	templateUrl: './episode.component.html',
    providers: [ EpisodeService ]
})
/**
 * EPISODE COMPONENT
 *
 * The main component that renders a list of episodes stored in MongoDB and a form to 
 * created, edit and delete episodes.
 *
 */
export class EpisodeComponent implements OnInit {
    zone:NgZone;
  	pageTitle:string;
  	errorMessage:string;
	episodes:Episode[] = [];
    episode: Episode;
    mode = 'add';
    searching:boolean;
    myform: FormGroup;
    public myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'su',
        inline: false,
        width:"200px"
    };

    _id: FormControl; 
    number: FormControl;
    title: FormControl;
    director: FormControl;
    writer: FormControl;
    airDate: FormControl;
    selDate: IMyDate;

	constructor(private _episodeService: EpisodeService, private changeDetector: ChangeDetectorRef) {
        this.zone = new NgZone({enableLongStackTrace: false});
        this.episode = new Episode();
        this.searching = false;
        this.selDate = {year: 0, month: 0, day: 0};
        this.pageTitle = 'Episodes';
        this.errorMessage = '';
    }

	ngOnInit() { 
        this.createFormControls();
        this.createForm();
        this.getEpisodes();
	}
    createFormControls = function () { 
        this._id = new FormControl();
        this.number = new FormControl('', Validators.required);
        this.title = new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ]);
        this.director = new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ]);
        this.writer = new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ]);
        this.airDate = new FormControl('', Validators.required);
    }

    createForm = function () { 
        this.myform = new FormGroup({
          _id: this._id,
          number: this.number,
          title: this.title,
          director: this.director,
          writer: this.writer,
          airDate: this.airDate
        });
    }

  	getEpisodes = function () {
        this.searching = true;
        this._episodeService.getEpisodes()
        	.subscribe(
	           episodes => this._update(episodes),
	           error =>  this.errorMessage = <any>error)
    }

    
    postEpisode = function () {
        this._submitting();                
        this._episodeService.saveEpisode(this.myform.value, this.mode)
            .subscribe(
               episodes => this._resetForm(episodes),
               error =>  this.errorMessage = <any>error)
    }
    editEpisode = function(episode:Episode) {
        this.mode = 'edit';
        this.myform.patchValue({
            _id: episode._id,
            number: episode.number,
            title: episode.title,
            director: episode.director,
            writer: episode.writer,
            airDate: episode.airDate
        });
        this.setDate(episode.airDate);
        this.changeDetector.detectChanges();
    };
    deleteEpisode = function (id) {
        this.searching = true;
        this._episodeService.deleteEpisode(id)
            .subscribe(
               episodes => this._update(episodes),
               error =>  this.errorMessage = <any>error)
    }
    /*-----------------------------------------------------------------
    /    mydatepicker functions
    /----------------------------------------------------------------*/
    /**
     * onDateChanged
     * @param event: IMyDateModel
     * event properties are: event.date, event.jsdate, event.formatted and event.epoc
     */
    onDateChanged = function(event: IMyDateModel) {
        var newdate = event.jsdate;
        this.myform.patchValue( { airDate: newdate } );
    }
    /**
     * setDate
     * @param date: IMyDate
     * Set date using the patchValue function
     */
    setDate = function(date) {
        let d: Date = new Date(date);
        this.selDate = {year: d.getFullYear(), 
                        month: d.getMonth() + 1, 
                        day: d.getDate()};
        this.myform.patchValue( {airDate: this.selDate} );
    };
 
    /**
     * clearDate
     * Clear the date using the patchValue function
     */
    clearDate = function(): void {
        this.myform.patchValue( {airDate: null} );
    }
    /*-----------------------------------------------------------------
    /  PRIVATE FUNCTIONS
    /----------------------------------------------------------------*/
    private _handleResult = function (data) {
        this.episodes = data.episodes
        this.changeDetector.detectChanges();
        this.searching = false;
        this.result = true;
        this.sortProp = 'number';
    }

    private _resetForm = function(episodes: Episode[]) {
        this.mode = 'add';
        this.myform.reset();
        this.changeDetector.detectChanges();
        if (typeof episodes !== "undefined") this._update(episodes);
    }

    private _submitting = function() {
        this.result = false;
        this.searching = true;
        this.errors = false;
    }
    private _update = function (data) {
        this.episodes = [];
        this.searching = false;
        if (typeof data.status !== "undefined" && data.status === 200) {
            this._handleResult(data);
        } else {
            this.errors = true;
            if (typeof data.errors !== "undefined" && typeof data.errors.err !== "undefined") this.errorMessage = data.errors.err;
        }
    }
}