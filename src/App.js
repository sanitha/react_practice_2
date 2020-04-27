import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      recommentation: "",
      durability: "",
      quality: "",
      quantity: "",
      offers: "",
      overall: "",
      favShopMeth: "",
      count: 0,
      description: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClickDown = this.handleClickDown.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }
  
  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
      
    })
  }
  handleClickDown(event) {
    (this.setState(prevState => {return {count: prevState.count - 1}}))
    // const val = event.target.value
    // val > 10 ? (this.setState(prevState => {return {count: prevState.count - 1}})) : (this.setState(prevState => {return {count: prevState.count}}))
  }

  handleSubmit(event) {
    // alert("Survey has been submitted Successfully")
    event.preventDefault();
  }

  render() {
    var date = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                'Thursday', 'Friday', 'Saturday']
    var months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var hours = date.getHours()
    var minutes = date.getMinutes()
    let day = days[date.getDay()]
    let month = months[date.getMonth()]
    let year = date.getFullYear()
    let wish
    let styles = {
        fontSize: 20
    }

    if(hours < 12) {
        wish = 'Good Morning'
        styles.color = "green"
    } else if(hours>= 12 && hours <= 17) {
        wish = 'Good Afternoon'
        styles.color = "red"
    } else {
        wish = 'Good Night'
        styles.color = "violet"
    }

    return(
      <div>
        <h1 class="survey-header">Product Survey Template</h1>
        <div class="survey-form">
          <form onSubmit={this.handleSubmit}>
            <i>Your Details:</i>
            <input 
              type="text"
              name="firstName"
              value={this.state.firstName}
              placeholder="FirstName"
              onChange={this.handleChange}
            />
            <input 
              type="text"
              name="lastName"
              value={this.state.lastName}
              placeholder="LastName"
              onChange={this.handleChange}
            />
            <br /><br />
            <label>
              <i>Do you Recomment our Products?</i> <br />

              <input 
                type="radio"
                name="recommentation"
                value="Yes"
                checked={this.state.recommentation === 'Yes'}
                onChange={this.handleChange}
              /> Yes
              <input 
                type="radio"
                name="recommentation"
                value="No"
                checked={this.state.recommentation === "No"}
                onChange={this.handleChange}
              /> No

            </label>
            <br /><br />
            <label>
            <i>What features you liked in our products?</i> <br />
              Product Quality<input
              type="checkbox"
              name="quality"
              checked={this.state.quality}
              onChange={this.handleChange}
              /><br />
              Durability<input 
                type="checkbox"
                name="durability"
                checked={this.state.durability}
                onChange={this.handleChange}
              /><br />
              Quantity<input 
                type="checkbox"
                name="quantity"
                checked={this.state.quantity}
                onChange={this.handleChange}
              /><br />
              Offers<input 
                type="checkbox"
                name="offers"
                checked={this.state.offers}
                onChange={this.handleChange}
              /><br />
              Overall<input 
                type="checkbox"
                name="overall"
                checked={this.state.overall}
                onChange={this.handleChange}
              /><br />
            </label>
            <br />
            <label>
              <i> Your Shopping method </i>
              <select 
                value={this.state.favShopMeth}
                onChange={this.handleChange}
                name="favShopMeth">
                <option value=""></option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                </select>
            </label>
            <br />
            <br />
            <i>Choose a rating from 1 to 10 :  </i>
            <h1 style={{paddingLeft: 100}}> 
              <button 
                onClick={this.handleClickDown}
                value={this.state.count}> <h1> v </h1></button>
              {this.state.count > 10 ? 10 : this.state.count} 
              <button onClick={this.handleClick}> <h1> ^ </h1></button>
            </h1>
            <i>Please share your reviews about the products</i>
            <textarea 
              value={this.state.description}
              name="description"
              onChange={this.handleChange}
            />
            <br />
            <input 
              type="submit"
              value="Submit"
              class='submit'
            />
            {/* <button class='submit'>Submit</button> */}
          </form> 
        </div>

        
        <div class="survey-preview">
          <h5 style={{textAlign: "right", color: "brown"}}>Today is {day + ', ' + date.getDate() + ' ' + month + ' ' + year}
                     { '. '} Time is {hours + '.' + minutes} o'clock</h5>
          <h2 style={{color: "green"}}>{wish} {this.state.firstName} {this.state.lastName}</h2>
          <h3 style={{color: "green"}}>{this.state.recommentation == 'Yes' ? "Waw! You would like to recomment our products" : "" }</h3>
          <h3 style={{color: "brown"}}>{this.state.recommentation == 'No' ? "You dont like to recomment our products" : "" }</h3>          
          <h3>{this.state.recommentation === 'Yes' ? "Tell us the reasons you loved in our products" : ""}</h3>
          <div class = {this.state.recommentation === 'Yes' ? "checkbox-listing" : ""}>
            <h4>{this.state.quality == true ? "You liked the quality of our products" : ""}</h4>
            <h4>{this.state.durability == true ? "You liked the durability of our products" : ""}</h4>
            <h4>{this.state.quantity == true ? "You liked the quantities" : ""}</h4>
            <h4>{this.state.offers === true ? "You liked our offers" : ""}</h4>
            <h4>{this.state.overall === true ? "Overall you liked our products" : ""}</h4>
          </div>
          <h3>{this.state.favShopMeth == 'Online' ? "You Choose Online method for Shopping" : "" }</h3>
          <h3>{this.state.favShopMeth == 'Offline' ? "You Choose Offline method for Shopping" : "" }</h3>
          <h3 style={{color: 'green'}}>{this.state.count > 6 ? "Thank you for rating our product with score " + this.state.count : ""} </h3>
          <h3 style={{color: 'brown'}}>{(this.state.count < 7 && this.state.count > 0) ? "You have given a rating to our product with score " + this.state.count : ""} </h3>
          <hr />
          <h5>{this.state.description.length > 0 ? "Please find your review about our products" : ""}</h5>
          <div class = {this.state.description.length > 0 ? "checkbox-listing" : ""}>
            <p style={{color: 'brown'}}>{this.state.description}</p>
          </div>
        </div>
        <div class="imagesArea">
          <img src="images-3.jpeg" />
          <img src="images-2.jpeg" />
          <img src="images.png" />
          <img src="images.jpeg" />
        </div>
        <div class="survey-footer"> <p>Thanks for Visiting & Reviewing our Products</p></div>
      </div>
    )
  }
  
}

export default App;
