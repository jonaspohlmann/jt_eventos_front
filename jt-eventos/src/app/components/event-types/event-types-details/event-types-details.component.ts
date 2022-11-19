import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EventTypesFormComponent } from '../event-types-form/event-types-form.component';

@Component({
  selector: 'app-event-types-details',
  templateUrl: './event-types-details.component.html',
  styleUrls: ['./event-types-details.component.css', '../../../../styles.css']
})
export class EventTypesDetailsComponent implements OnInit {
  title = "Detalhes do tipo de evento"

  constructor(config: NgbModalConfig, private modalService: NgbModal, public activeModal: NgbActiveModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  editEventType() {
    const modalRef = this.modalService.open(EventTypesFormComponent, { centered: true });
    modalRef.componentInstance.title = 'Edição';
  }

  ngOnInit(): void { }
}
