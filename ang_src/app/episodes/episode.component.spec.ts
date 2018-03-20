import { TestBed, async } from '@angular/core/testing';
import { EpisodeComponent } from './episode.component';
describe('EpisodeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EpisodeComponent
      ],
    }).compileComponents();
  }));
  it('should create the episode page', async(() => {
    const fixture = TestBed.createComponent(EpisodeComponent);
    const episode = fixture.debugElement.componentInstance;
    expect(episode).toBeTruthy();
  }));
  it(`should have as title 'Episodes'`, async(() => {
    const fixture = TestBed.createComponent(EpisodeComponent);
    const episode = fixture.debugElement.componentInstance;
    expect(episode.pageTitle).toEqual('Episodes');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(EpisodeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Episodes');
  }));
});
