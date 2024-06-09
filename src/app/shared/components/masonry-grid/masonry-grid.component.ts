import {
  AfterViewChecked,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-masonry-grid',
  templateUrl: './masonry-grid.component.html',
  styleUrl: './masonry-grid.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MasonryGridComponent implements AfterViewChecked {
  @Input() columns: number = 3;
  @Input() gutter: number = 10;
  t: number | null = null;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewChecked() {
    this.rearrangeItems()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.rearrangeItems()
  }


  private rearrangeItems() {
    const element = this.elementRef.nativeElement;
    const items = element.querySelectorAll('.masonry-item');
    const columnHeights = Array.from({ length: this.columns }, () => 0);
    items.forEach((item: HTMLElement) => {
      const minHeight = Math.min(...columnHeights);
      const columnIndex = columnHeights.indexOf(minHeight);
      const left = columnIndex * (item.offsetWidth + this.gutter);
      const top = minHeight;
      console.log(item.offsetWidth, item.offsetHeight)

      item.style.position = 'absolute';
      item.style.left = `${left}px`;
      item.style.top = `${top}px`;

      columnHeights[columnIndex] += item.offsetHeight + this.gutter;
    });

    const maxHeight = Math.max(...columnHeights);
    element.querySelector('.masonry-container').style.height = `${maxHeight}px`;
  }
}
