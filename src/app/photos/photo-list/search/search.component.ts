import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>();

  @Input() value: string = '';
  
  debounce: Subject<KeyboardEvent> = new Subject<KeyboardEvent>();
  
  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300))
    .subscribe((event: KeyboardEvent) => {
      const inputValue = (event.target as HTMLInputElement).value;
      this.onTyping.emit(inputValue);
    });
  }
  
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  onKeyPress(event: KeyboardEvent): void {
    this.debounce.next(event);
  }

}
