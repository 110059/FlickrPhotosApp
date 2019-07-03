import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FlickrService } from '../services/flickr.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  public searchForm: FormGroup;
  public photos: any[] = [];
  constructor(
    private fb: FormBuilder,
    private flickrService: FlickrService
  ) { 
    this.searchForm = fb.group(
        {
          tags: ''
          // tags: ['', Validators.required]
        }
    )
  }
  /*
  * run once after render
  */
  ngOnInit() {
    this.getPhotos();
  }

  /* 
  * service to get photos
  * params: tag (optional) 
  */
  public getPhotos(tags: string = null): void {
    this.flickrService.getPhotos(tags).subscribe(data => {
      this.photos = data;
      console.log(data);
    },
    error => { console.log('error') }
    ),
    () => console.log('completed')
  }

  /**
   * onSubmit the search button
   */
  public onSubmit(): void {
    const tags = this.searchForm.get('tags').value;
    this.getPhotos(tags);
  }

}
