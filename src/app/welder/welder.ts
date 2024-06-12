export interface Welder {

    id: number
    Super_First_name: string
    Super_Surname: string
    Super_mail: string
    Desired_Job_Category: string
    Desired_position: string
    Super_Telephone: number
    asap: boolean
    Comment_1: string

  
  
  
  
  
  
   /* h_quality_drug: boolean
    h_quality_alco: boolean
    h_quality_weak: boolean
    h_quality_dump: boolean
    h_quality_stuffy: boolean
    h_quality_demanding: boolean
    h_quality_bad_specialist: boolean


    id: number
    title: string // number
    slug: string // number
    CV_url: string
    Super_First_name: string
    Super_Surname: string
    //Super_Age: number
    //NonGastarbeiter: boolean
    Super_Sex: string
    Super_Language_of_communication: string
    Super_Place_of_residence: string
    Super_Telephone: number
    Super_mail: string
    Purpose_1: string
    Desired_Job_Category: string
    Desired_position: string
    Desired_Job_Type: string
    Desired_Work_Time: string
    Desired_Locations: string
    Desired_country: string
    Desired_salary: string
    Work_experience: string
    Work_experience_data_1: string
    Work_experience_career_1: string
    Work_experience_firma_1: string
    Work_experience_job_1: string
    Work_experience_data_2: string
    Work_experience_career_2: string
    Work_experience_firma_2: string
    Work_experience_job_2: string
    Work_experience_data_3: string
    Work_experience_career_3: string
    Work_experience_firma_3: string
    Work_experience_job_3: string
    Work_experience_data_4: string
    Work_experience_career_4: string
    Work_experience_firma_4: string
    Work_experience_job_4: string
    Work_experience_data_5: string
    Work_experience_career_5: string
    Work_experience_firma_5: string
    Work_experience_job_5: string
    Work_experience_data_6: string
    Work_experience_career_6: string
    Work_experience_firma_6: string
    Work_experience_job_6: string
    Work_experience_data_7: string
    Work_experience_career_7: string
    Work_experience_firma_7: string
    Work_experience_job_7: string
    Work_experience_data_8: string
    Work_experience_career_8: string
    Work_experience_firma_8: string
    Work_experience_job_8: string
    Work_experience_data_9: string
    Work_experience_career_9: string
    Work_experience_firma_9: string
    Work_experience_job_9: string
    Work_experience_data_10: string
    Work_experience_career_10: string
    Work_experience_firma_10: string
    Work_experience_job_10: string
    Education_data_1: string
    Education_oganisation_1: string
    Education_qualification_awarded_1: string
    Education_skills_1: string
    Education_data_2: string
    Education_oganisation_2: string
    Education_qualification_awarded_2: string
    Education_skills_2: string
    Education_data_3: string
    Education_oganisation_3: string
    Education_qualification_awarded_3: string
    Education_skills_3: string
    Education_data_4: string
    Education_oganisation_4: string
    Education_qualification_awarded_4: string
    Education_skills_4: string
    Driver_license: string
    Driver_license_1: string
    Driver_license_2: string
    Driver_license_3: string
    Driver_license_4: string
    Driver_license_5: string
    Computer_1: string
    Computer_2: string
    Computer_3: string
    Computer_4: string
    Computer_5: string
    Training_1: string
    Training_2: string
    Training_3: string
    Training_4: string
    Extra_1: string
    Language_speech: string
    Language_information_1: string
    Language_information_2: string
    Language_information_3: string
    Language_information_4: string
    Language_information_5: string
    Language_information_6: string
    Update_date: string // maybe use type any?
    Qualification: string
    test_3: string
    Action : string

    description: string
    Comment_1: string
    Comment_2: string
    Comment_3: string
    Calendar : string
    tatle: string
    tatle_email: string
    start_time: number
    start_time_email: number
    end_time: number
    date_pup: number

    profession: string
    profession_description: string


    wrongtel: number

    workAsNonWelder: boolean
    workAsNonWelderComment: string

    asap: boolean

 
    available: string

    departureDate: number
    departureDateComm1: string
    departureDateComm2: string
    departure: boolean

  
    company: string

    expensivness: string

    costPerHour: number
    costPerHourComm: string

    totalUnreachable: string
    totalUnreachable2z: string

   
    car: string

    filedFormDate: number

    idPassportDate: number

    assignedDate: number

    workSiteDate: number

    freeComment1: string

    freeComment2: string

    tig: string

   
    welding: string
    welding_description: string
   
    metal: string
    metal_description: string
 
    type_work: string
    type_work_description: string
   
    experience: string
    competitors: string
    //anketa = models.ForeignKey('anketa.Anketa', on_delete=models.SET_NULL, null=True, blank=True)
    //responsible = models.ForeignKey('auth.User', related_name='works', on_delete=models.CASCADE, null=True, blank=True)
    //workpeople = models.ForeignKey('auth.User', related_name='workwelder', on_delete=models.CASCADE, null=True,
                                   //blank=True)
  
    welding1: string
     
    country: string
    passport: string
   
    group: string
    welding1_com: string

   /* def __str__(self):
        return f"{self.Super_Surname} {self.Super_First_name} {self.id}"
        # return f"{self.Super_First_name[:1]}. {self.Super_Surname}"
 
    class Meta:
        # verbose_name = "User"
        # verbose_name_plural = "Users"
        ordering = ["Super_Surname", "Super_First_name"]

        # verbose_name_plural = 'Welders ' + '(' + count_elephants() + ')'

    def call_button(self):
        p_list = [item for item in self.Super_Telephone.split(',') if item]
        p_select = '<select class="call_b" id="{}" data-mob="{} {}">'.format(self.id, self.Super_Surname,
                                                                             self.Super_First_name)
        p_select += '<option value=""></option>'
        for p in p_list:
            print(p)
            p_select += '<option value="{}">{}</option>'.format(p, p)
        p_select += '</select>'
        return format_html(p_select)
    call_button.short_description = format_html('CALL')
    call_button.allow_tags = True

    def departure_button(self):
        # print('---departure_button---')
        if self.user and self.group == 'OUR':
            url = (reverse("admin:account_project_add") + "?" + urlencode({"w_id": f"{self.user.id}"}))
            return format_html('<a target="_blank" rel="noopener noreferrer" href="{}">&nbsp;📦&nbsp;</a>', url)
        else:
            print('no user')
    departure_button.short_description = format_html('DEP')
    departure_button.allow_tags = True

    @property
    def get_html_url(self):
        url = reverse('cal:event_edit', args=(self.id,))
        # url = reverse('cal:event_edit', args=(self.id,))
        # return f'<a href="{self.id}"> {self.title} </a>'
        return f'<a href="{url}" target="_blank">{self.Super_First_name} {self.Super_Surname} {self.tatle} </a>'

    def fname_lname(self):

        # # link = ''
        # try:
        #     if self.user:
        #         link = '📎'
        # except ObjectDoesNotExist:
        #     link = ''

        if self.group != 'OUR' and self.group != 'OUR_NEW':
            return format_html(
                '<span style="color: #F08080">{}<br>{}</span>',
                self.Super_First_name,
                self.Super_Surname
            )

        return format_html(
            '<span style="color: #66CDAA">{}<br>{}</span>',
            self.Super_First_name,
            self.Super_Surname,
        )


    def phone_name(self):
        return format_html(
            '<a href="skype:+372{}?call">Call</a>',
            self.Super_Telephone,
        )


    def cvkeskus(self):
        return format_html(
            '<a class="button" style= "margin-left: 0px" href="http://192.168.1.144:8000/event/{}" target="_blank">cvkeskus</a>',
            self.id,
        )

    def mailto(self):
        return format_html(
            '<a href="mailto:{}?subject=Important!&cc=test@gmail.com&body=The Tips %0A Name: {} %0A <p> Tricks section is %0A Surname {} %0A great&" target="_blank" rel="noopener">📧</a>',
            self.Super_mail,
            self.Super_First_name,
            self.Super_Surname,
        )
    mailto.short_description = format_html('CALL')
    mailto.allow_tags = True

    def Age(self):

        if self.Super_Age:
            a = int((datetime.now().date() - self.Super_Age).days / 365.25)

            if a > 55:
                return format_html('<span style="color: #d02932">{}</span>', a)
            else:
                return format_html('<span style="color: #2992b5">{}</span>', a)

        else:
            return None*/

/*class Computer(models.Model):
    welder = models.ForeignKey(Newwelder, on_delete=models.CASCADE, null=True)
    data : string


class DriverLicense(models.Model):
    welder = models.ForeignKey(Newwelder, on_delete=models.CASCADE, null=True)
    data : string


class Training(models.Model):
    welder = models.ForeignKey(Newwelder, on_delete=models.CASCADE, null=True)
    data : string


class LanguageExperience(models.Model):
    welder = models.ForeignKey(Newwelder, on_delete=models.CASCADE, null=True)
    data : string


class Education(models.Model):
    welder = models.ForeignKey(Newwelder, on_delete=models.CASCADE, null=True)
    data : string
    organisation : string
    qualificationAwarded : string
    skills : string


class WorkExperience(models.Model):
    welder = models.ForeignKey(Newwelder, on_delete=models.CASCADE, null=True)
    data : string
    career : string
    firma : string
    job : string

    class Meta:
        ordering = ['-id']


class Callw(models.Model):
    user = models.ForeignKey(User, null=False, on_delete=models.CASCADE, related_name='userW')
    date = models.DateField(null=True, blank=True)
    time = models.TimeField(null=True, blank=True)
    comment = models.TextField(blank=True, null=True)

   
    calltype: string
    welder = models.ForeignKey(Newwelder, on_delete=models.CASCADE)
    direction = models.CharField(null=True, blank=True, max_length=100, default='')
    duration = models.IntegerField(blank=True, null=True)

    class Meta:
        ordering = ['-id']
*/
}
