document.addEventListener('DOMContentLoaded', function() {
    const educationSelect = document.getElementById('educationSelect');
    const certificationInfo = document.getElementById('certificationInfo');
  
    educationSelect.addEventListener('change', function() {
      const selectedLevel = educationSelect.value;
      if (selectedLevel === 'no_education') {
        certificationInfo.style.display = 'none'; // Hide fieldset
        return; // No fields to display
      }
      certificationInfo.style.display = 'block'; // Show fieldset
      certificationInfo.innerHTML = ''; // Clear previous fields
      if (selectedLevel === 'elementary') {
        addCertificationAndInstitutionField('Elementary and Below');
      }
      if (selectedLevel === 'middle') {
        addCertificationAndInstitutionField('Middle School');
        addPriorEducationFields('Elementary');
      }
      if (selectedLevel === 'high') {
        addCertificationAndInstitutionField('High School');
        addPriorEducationFields('Middle School');
        addPriorEducationFields('Elementary');
      }
      if (selectedLevel === 'undergrad') {
        addCertificationAndInstitutionField('Undergraduate');
        addPriorEducationFields('High School');
        addPriorEducationFields('Middle School');
        addPriorEducationFields('Elementary');
      }
      if (selectedLevel === 'graduate') {
        addCertificationAndInstitutionField('Graduate/Postgraduate');
        addPriorEducationFields('Undergraduate');
        addPriorEducationFields('High School');
        addPriorEducationFields('Middle School');
        addPriorEducationFields('Elementary');
      }
    });
  
    function addCertificationAndInstitutionField(labelText) {
      addField(labelText + ' Certification:');
      addField('Institution:');
    }
  
    function addPriorEducationFields(labelText) {
      addField(labelText + ' Institution:');
      addField(labelText + ' Completion Year:');
    }
  
    function addField(labelText) {
      const label = document.createElement('label');
      label.textContent = labelText;
      certificationInfo.appendChild(label);
      certificationInfo.appendChild(document.createElement('br'));
  
      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      certificationInfo.appendChild(input);
      certificationInfo.appendChild(document.createElement('br'));
    }
  });
  