import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        const consultants = [
            {fname: 'Anand', lname: 'kumar', job: 'Software', dob: '27-02-1988',
            position: 'developer', rate: '700', education: 'B.TECH', address: 'Belgium',
             email: 'kr88anand@gmail.com', skype: 'anand3272kumar', phone: '8806052454',
              expiryDate: '15-09-2028', certificate: 'java certificate'},
              {fname: 'Anita', lname: 'Rawat', job: 'Software', dob: '26-07-1989',
              position: 'developer', rate: '700', education: 'B.TECH', address: 'Belgium',
               email: 'kr88anand@gmail.com', skype: 'anita26jul', phone: '8806052454',
                expiryDate: '15-09-2028', certificate: 'java certificate'},
  {fname: 'Anjali', lname: 'bharti', job: 'Teacher', dob: '27-02-1988',
              position: 'developer', rate: '700', education: 'B.TECH', address: 'Patna',
               email: 'sister2nd@gmail.com', skype: 'sister2nd', phone: '7894561232',
                expiryDate: '15-09-2028', certificate: 'java certificate'},
  {fname: 'Neha', lname: 'Singh', job: 'Housewife', dob: '27-02-1988',
              position: 'developer', rate: '700', education: 'B.TECH', address: 'Patna',
               email: 'sister4th@gmail.com', skype: 'sister4th', phone: '8806052454',
                expiryDate: '15-09-2028', certificate: 'java certificate'},
  {fname: 'Ritu', lname: 'singh', job: 'Software', dob: '27-02-1988',
              position: 'developer', rate: '700', education: 'B.TECH', address: 'patna',
               email: 'sister1st@gmail.com', skype: 'sister1st', phone: '222222222',
                expiryDate: '15-09-2028', certificate: 'java certificate'},
  {fname: 'Akansha', lname: 'Singh', job: 'Software', dob: '27-02-1988',
                      position: 'developer', rate: '700', education: 'B.TECH', address: 'Patna',
               email: 'sister3rd@gmail.com', skype: 'anand3272kumar', phone: '1234567899',
                expiryDate: '15-09-2028', certificate: 'java certificate'},
  {fname: 'Shashi', lname: 'Bhushan', job: 'Software', dob: '27-02-1988',
              position: 'Police', rate: '700', education: 'Intermediate', address: 'Patna',
               email: 'papa@gmail.com', skype: 'anand3272kumar', phone: '9431366526',
                expiryDate: '15-09-2028', certificate: 'java certificate'},
  {fname: 'Vicky', lname: 'Babu', job: 'Software', dob: '27-02-1988',
              position: 'developer', rate: '700', education: 'B.TECH', address: 'Patna',
               email: 'kr88anand@gmail.com', skype: 'anand3272kumar', phone: '8806052454',
                expiryDate: '15-09-2028', certificate: 'java certificate'}
        ];
        return {consultants};

    }
}
