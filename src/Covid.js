import React, { useState } from 'react';
import axios from 'axios';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
     
    },
  },
}));

function Covid(props) {
    const classes = useStyles();
    const [coviddata,setCoviddata] = useState([]);
    const [country,setCountry] = useState("india");
   
  {/*    axios
      .get("https://api.covid19api.com/live/country/"+(country)+"/status/confirmed")
      .then(response => setCoviddata(response.data));
  console.log(coviddata); */} 
 

function handleChange(event)
{
setCountry(event.target.value);
   // console.log(event.target.value);
}
//console.log(coviddata);
function Updateapi(e)
{
e.preventDefault();

    axios
      .get("https://api.covid19api.com/live/country/"+(country)+"/status/confirmed")
      .then(response => setCoviddata(response.data));
      console.log(coviddata);
 
}
   
    return (
    <div>
      <div>
<center><div align="center" style={{color:"red",fontSize:25,fontWeight:"bold"}}>World Covid Tracker </div>

    <form className={classes.root} noValidate autoComplete="off">
    <div align="center" style={{color:"cornflowerblue",fontSize:15,fontWeight:"bold"}}>Enter Country Name Ex: india</div>
   
   
    <TextField id="outlined-basic" name="country"  onChange={handleChange}  label="Country Name" variant="outlined" />
  </form>

{/* <button type="submit" onClick={Updateapi}></button>*/}  
&nbsp;&nbsp;<Button variant="contained" type="submit" onClick={Updateapi} color="secondary">
&nbsp;&nbsp;&nbsp; Submit &nbsp;&nbsp; &nbsp;
</Button>


<br></br>
<br></br>
<div className="ag-theme-alpine" style={{ height: 400, width: 1200 }}>
    <AgGridReact
        rowData={coviddata}
        animateRows={true}
        pagination={true}
enableRangeSelection={true}

               paginationPageSize={7}>
        <AgGridColumn field="Country" sortable={true} filter={true} resizable={true} ></AgGridColumn>
        
        <AgGridColumn field="Deaths" sortable={true} filter={true} resizable={true} ></AgGridColumn>
        <AgGridColumn field="Confirmed" sortable={true} filter={true} resizable={true} ></AgGridColumn>
        <AgGridColumn field="Active" sortable={true} filter={true} resizable={true} ></AgGridColumn>
        <AgGridColumn field="Recovered" sortable={true} filter={true} resizable={true} ></AgGridColumn>
        
        <AgGridColumn field="Date" sortable={true} filter={true} resizable={true} ></AgGridColumn>
        <AgGridColumn field="Province" sortable={true} filter={true} resizable={true} ></AgGridColumn>
    </AgGridReact>
</div>
<div align="center" style={{color:"dodgerblue",fontSize:14,fontWeight:"bold"}}>Please Note : Data showing as Grand Total</div>
<div align="center" style={{color:"seagreen",fontSize:14,fontWeight:"bold"}}>Filter by clicking 
column header 3 bars | Sort by Clicking ColumnName</div>
<br>
</br>
<hr width={250}></hr>

Developed By <i>Safwan Mannambath</i>
<br></br>
<hr width={250}></hr>
</center>

</div>
{/* 
    This part is displaying as map function same data above
  <div>
    {coviddata.map((person, index) => (
        <p key={index}>-{person.Country} -{person.Deaths}!</p>
    ))}
    </div>);
*/}  


  </div>

);

}

export default Covid;
