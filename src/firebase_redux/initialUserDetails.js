
const conditions ={
      isBusy: false , //class 
      isAssigned: false,
      location: 'No'  // , Office = o , Eastside = e, Asso = a, Arts = at
}


 const intervals = {
   0:  conditions,
   15: conditions,
   30: conditions,
   45: conditions

}

export  const day = { 
6 : intervals,
7 :intervals,
8 :intervals,
9 : intervals,
10:intervals,
11:intervals,
12:intervals,
13:intervals,
14:intervals,
15:intervals,
16:intervals,
17:intervals,
18:intervals,
19:intervals,
}

const init_user = {
  Monday: {hrs: day, CountPerDay: 0},
  Tuesday:{hrs: day, CountPerDay: 0},
  Wednesday:{hrs: day, CountPerDay: 0},
  Thursday: {hrs: day, CountPerDay: 0},
  Friday: {hrs: day, CountPerDay: 0},
}


export default init_user;