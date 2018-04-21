import {
  EventEmitter,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output
} from '@angular/core';

export interface FormChangeEvent extends Event {
  target: EventTarget & {
    files: FileList;
  };
}

@Directive({
  selector: '[fbDrag]'
})
export class DragDirective {
  @Input() files: File[] = [];
  @Output() filesChange: EventEmitter<File[]> = new EventEmitter<File[]>();

  @Input() file: File;
  @Output() fileChange: EventEmitter<File> = new EventEmitter<File>();

  @Output() dragOver: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  @HostListener('dragover', ['$event'])
  onDragover(e: Event) {
    this.cancelEvent(e);
    this.dragOver.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragleave(e: Event) {
    this.cancelEvent(e);
    this.dragOver.emit(false);
  }

  @HostListener('drop', ['$event'])
  onDrop(e: DragEvent) {
    this.cancelEvent(e);
    this.dragOver.emit(false);
    const files = Array.from(e.dataTransfer.files);
    this.fileChange.emit(files.find((v, i) => i === 0));
    this.filesChange.emit(files);
  }

  private cancelEvent(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }
}
