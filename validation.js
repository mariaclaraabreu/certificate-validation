
  var codigos = ['Me8CNw3Z','BxRCOw80','IQ0PK4x1','y4p3tKI6','pH9333R5','pk85W6wf','NluZfiPT','c6MLGWIw',
  'eHpYB7Tq','hRm4OYad','9L2ftI0M','ECYLZh83','pnQqlkYJ','3AEIZelZ','pe4amtmr','xB3Mj1FO','fX6G8TQ2',
  'UUAuzmJf','GE5szial','kTzJL5Zq','RWyQpEJB','ZKwOx6t3','ApmzNDbz','YP9jKYPd','tEuaI4ci','EOx2KgwK',
  'LZAacbP0','rOa2nqUY','uGz4AQcF','gO8qwt28','I2ZlTocB','423hiO5S','WuMWBpci','5aOrJHpS','AF4TuWUo',
  'OOLxdHGz','2TL4Aod5','FsmP0Si0','ZdJJ0fyE','tA2NI9DB'];

  function validation(){
    var cod = document.getElementById("inp");
    
    var verif = codigos.includes(cod.value); 
    if (verif == true) { 
      alert('Este certificado é VÁLIDO!!!');
    } else if( verif == false){
      alert('Este certificado NÃO é válido!!!');
    }

  }
   