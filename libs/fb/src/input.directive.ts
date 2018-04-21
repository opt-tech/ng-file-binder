import { EventEmitter, Directive, ElementRef, HostListener, Input, Output } from '@angular/core';

export interface FormChangeEvent extends Event {
  target: EventTarget & {
    files: FileList
  }
}

@Directive({
  selector: '[fbInput]'
})
export class InputDirective {
  @Input() files: File[] = []
  @Output() filesChange: EventEmitter<File[]> = new EventEmitter<File[]>()

  @Input() file: File
  @Output() fileChange: EventEmitter<File> = new EventEmitter<File>()

  constructor(private elment: ElementRef) { }

  @HostListener('change', ['$event'])
  onChange(e: FormChangeEvent) {
    const files = Array.from(this.elment.nativeElement.files as FileList || e.target.files)
    this.fileChange.emit(files.find((v, i) => i === 0))
    this.filesChange.emit(files)
  }
}