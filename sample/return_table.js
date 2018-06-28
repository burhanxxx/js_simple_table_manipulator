function returnTable(s) {
  if((s != null) && (typeof s === 'string')) {
    var tbl = document.querySelector(s.trim()); 
    return (tbl && tbl.tagName == 'TABLE') ? tbl : null;
  } 				
}
