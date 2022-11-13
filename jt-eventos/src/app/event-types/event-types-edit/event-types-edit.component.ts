import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelModalComponent } from 'src/app/modals/cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-event-types-edit',
  templateUrl: './event-types-edit.component.html',
  styleUrls: ['./event-types-edit.component.css', '../../../styles.css']
})
export class EventTypesEditComponent implements OnInit {
  title = "Edição de Tipo de Evento"

  constructor(private modalService: NgbModal) {}

	open() {
		this.modalService.open(CancelModalComponent);
	}

  ngOnInit(): void {
  }

}
