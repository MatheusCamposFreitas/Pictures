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

  // Configura o debounce para eventos de teclado no campo de search.
  // Aguarda 300ms após o último evento antes de emitir o valor do campo.
  // Emite o valor do campo para 'onTyping', indicando digitação no campo de pesquisa.
  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300))
      .subscribe((event: KeyboardEvent) => {
        const inputValue = (event.target as HTMLInputElement).value;
        this.onTyping.emit(inputValue);
      });
  }

  // Cancela a subscrição do debounce ao destruir o componente, liberando a memória referênciada.
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  // Este método é chamado quando há um evento de teclado.
  // Ele envia o evento para o 'debounce', que é utilizado para controlar
  // a frequência de execução de ações associadas a eventos de teclado,
  // evitando ações excessivas e melhorando a eficiência.
  onKeyPress(event: KeyboardEvent): void {
    this.debounce.next(event);
  }

}
