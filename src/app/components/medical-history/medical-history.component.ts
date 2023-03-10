import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router} from '@angular/router';
import { HistoriaClinica } from '../../models/HistoriaClinica';
import { Patient } from '../../models/Patient';
import { MedicalHistoryService } from '../../services/medical-history.service';
import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {

  loading = true;

  id_patient: string = '';

  id_medical_history = '';

  patient: Patient = new Patient;

  medicalHistory: HistoriaClinica = new HistoriaClinica;

  constructor(private router:Router, private medical_history_service:MedicalHistoryService, private patient_service:PatientsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_medical_history = this.activatedRoute.snapshot.params['id'];
    this.id_patient = this.activatedRoute.snapshot.params['id_patient'];
    this.getPatient();
    this.getMedicalHistory();
  }

  getMedicalHistory() {
    this.medical_history_service.getMedicalHistoryFromId(this.id_medical_history)
    .subscribe(
      result => {
        this.medicalHistory = result;
        this.loading = false;
      }
    );
  }

  getPatient() {
    this.patient_service.getPatient(this.id_patient)
    .subscribe(
      result => {
        this.patient = result;
      }
    );
  }

  goToEditForm() {
    this.router.navigate(['/medical-history-form', this.medicalHistory._id, this.id_patient])
  }

}
