/let employeeSalary=parseInt(prompt('Enter Employee Salary'));/
let employeeSalary=100000;
function payYeeCalculator(){
let payYee;
switch(true){
    case(employeeSalary === 24000):
        return payYee = employeeSalary * 0.01;
        break;
    case(employeeSalary > 24000 && employeeSalary <= 32333):
        return payYee = employeeSalary * 0.25;
        break;
    case (employeeSalary > 32333 && employeeSalary <= 50000):
        return payYee = employeeSalary * 0.3;
        break;
    case (employeeSalary > 50000 && employeeSalary <= 80000):
        return payYee = employeeSalary * 0.325;
        break;
    default:
        return payYee = employeeSalary * 0.35;
        break;
}
}

function NHIFcalcultor(){
let NHIF;
switch(true){
    case(employeeSalary>=0 && employeeSalary <6000):
        return NHIF =150;
        break;
    case(employeeSalary >=6000 && employeeSalary <8000):
       return  NHIF =300;
        break;
    case (employeeSalary >=8000 && employeeSalary <12000):
        return NHIF =400;
        break;
    case (employeeSalary >=12000 && employeeSalary <15000):
        NHIF =500;
        break;
    case(employeeSalary>=15000 && employeeSalary<20000):
        return NHIF=600;
        break;
    case(employeeSalary>=20000 && employeeSalary<25000):
        return NHIF=750;
        break;
    case(employeeSalary>=25000 && employeeSalary<30000):
        return NHIF=850;
        break;
    case(employeeSalary>=30000 && employeeSalary<35000):
        return NHIF=900;
        break;
    case(employeeSalary>=35000 && employeeSalary<40000):
        NHIF=950;
        break;
    case(employeeSalary>=40000 && employeeSalary<45000):
        return NHIF=1000;
        break;
    case(employeeSalary>=45000 && employeeSalary<50000):
        return NHIF=1100;
        break;
    case(employeeSalary>=50000 && employeeSalary<60000):
        return NHIF=1200;
        break;
    case(employeeSalary>=60000 && employeeSalary<70000):
        return NHIF=1300;
        break;
    case(employeeSalary>=70000 && employeeSalary<80000):
        return NHIF=1400;
        break;
    case(employeeSalary>=80000 && employeeSalary<90000):
        return NHIF=1500;
        break;
    case(employeeSalary>=90000 && employeeSalary<100000):
        return NHIF=1600;
        break;
    default:
        return NHIF=1700;
        break;

}
}
console.log(NHIFcalcultor());

const NSSFCalculator=()=>{
    let NSSF;
    return NSSF=0.06*employeeSalary;
}
let netPay=employeeSalary-(payYeeCalculator()+NHIFcalcultor()+NSSFCalculator());
console.log(netPay);