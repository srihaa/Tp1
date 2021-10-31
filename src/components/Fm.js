import React,{useState} from 'react';
import {nanoid} from 'nanoid';
import data from "./mock-data.json";


const Fm = () => {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        Gender: "",
        Name: "",
        Age: "",
        Date: "",
        DreamCountry: "",
      });

    const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
      };

      const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
        const newContact = {
          id: nanoid(),
          Gender: addFormData.Gender,
          Name: addFormData.Name,
          Age: addFormData.Age,
          Date: addFormData.Date,
          DreamCountry: addFormData.DreamCountry,
        };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
      };
    



        return(
            <>
             <form onSubmit={handleAddFormSubmit}>
            <div className="text-center , container" >
            <h2>Formulaire</h2> <br/><br/>
                   
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio"  name="Gender" id="mr"  value="Mr" onChange={handleAddFormChange}></input>
                    <label className="form-check-label" htmlFor="mr">Mr.</label>
                     </div>
                <div class="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="Gender"  id="mme" value="Mme"  onChange={handleAddFormChange}/>
                    <label className="form-check-label" htmlFor="mmr">Mme.</label>
                </div>

                <div class="form-group">
                    <input type="text" className="form-control" id="name" name="Name"  onChange={handleAddFormChange} placeholder="Name"></input>
                </div>
                <div class="form-group">
                    <input type="number" className="form-control" id="age" name="Age"  onChange={handleAddFormChange} placeholder="Age"></input>
                </div>

                <div class="form-group">
                    <input type="date" className="form-control" id="date" name="Date"  onChange={handleAddFormChange} placeholder="Date"></input>
                </div>
                
                <div class="form-group">
                        <label htmlFor="dreamCountry" >Dream Country</label>
                        <select   onChange={handleAddFormChange} className="form-control" id="dreamCountry" name="DreamCountry"  >
                        <option>Select...</option>
                        <option>America</option>
                        <option>DeutschLand</option>
                        <option>France</option>
                        <option>Canada</option>
                        <option>Italy</option>
                        <option>Spain</option>
                        <option>Australia</option>
                </select>
                </div>

                <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </div>
        </form>
        
                <table className="table">
            <thead className="thead-dark">
            <tr>
                <th>Gender</th>
                <th>Name</th>
                <th>Age</th>
                <th>Date</th>
                <th>Dream Country</th>
            </tr>
            </thead>
            <tbody>
                {contacts.map((contact)=>(
            <tr>
                <td>{contact.Gender}</td>
                <td>{contact.Name}</td>
                <td>{contact.Age}</td>
                <td>{contact.Date}</td>
                <td>{contact.DreamCountry}</td>

            </tr>
                ))}
            </tbody>
        </table>

        </>
    );
              
}

export default Fm