import {
  Directive,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from './auth.service';

@Directive({
  selector: '[bmLoggedinOnly]',
  standalone: true
})
export class LoggedinOnlyDirective implements OnDestroy {
  private destory$ = new Subject<void>();
  constructor(
    private authService: AuthService,
    private template: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
  ) {
    this.authService.isAuthenticated$
      .pipe(takeUntil(this.destory$))
      .subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          this.viewContainer.createEmbeddedView(this.template);
        } else {
          this.viewContainer.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this.destory$.next();
  }
}
