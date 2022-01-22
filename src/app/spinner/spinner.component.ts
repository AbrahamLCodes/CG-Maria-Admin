import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {

  public isLoading = this.spiner.isLoading$;

  constructor(
    private spiner: SpinnerService
  ) { }

  ngOnInit() {}

}
