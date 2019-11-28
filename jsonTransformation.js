const org = [
  {categormName : 'sec1',
   children : [{name : 'shaktish'}, {name : 'annz'}],
   insights : [{name:'proh'}]  
  },
   {categormName : 'sec2',
   children : [{name : 'fayaz'}],
   insights : [{name:'kavi'}]  
  }
]

const json = [
  {categormName : 'sec1',
   children : [{name : 'shaktish'}, {name : 'annz'}],
   insights : [{name:'proh'}]  
  },
   {categormName : 'sec2',
   children : [{name : 'fayaz'}],
   insights : [{name:'kavi'}]  
  }
]

json.forEach(el=>{    
  // debugger;
  el.children = [...el.children, ...el.insights];
  
  el.children.forEach((childEl, i)=>{
   el.children[i] = {...childEl, title : childEl.name}
  });
  
})


console.log(org, 'org');
console.log(json, 'json res');





