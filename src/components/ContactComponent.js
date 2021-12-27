import React,{Component} from 'react';
import {BreadcrumbItem,Breadcrumb,Button,FormGroup,Label,Input,Col,Row,FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,LocalForm,Errors,actions,Form} from 'react-redux-form';
const required=(val)=>val && val.length;
const maxLength=(len)=>(val)=>!(val)||(val.length<=len);
const minLength=(len)=>(val)=>(val)&&(val.length>=len);
const isNumber=(val)=>!isNaN(Number(val));
const validEmail=(val)=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
class Contact extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     firstname:'',
        //     lastname:'',
        //     telnum:'',
        //     email:'',
        //     agree:false,
        //     contactType:'',
        //     message:'',
        //     touched:{
        //         firstname:false,
        //         lastname:false,
        //         telnum:false,
        //         email:false
        //     }
        // }
        this.handleSubmit=this.handleSubmit.bind(this);
        // this.handleInputChange=this.handleInputChange.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
    }
    // handleInputChange(event){
    //     const target=event.target;
    //     const value=target.type ==='checkbox' ? target.checked :target.value;
    //     const name=target.name;
    //     this.setState({
    //         [name]:value
    //     });
    // }
    handleSubmit(values){
        console.log("Curent state is:"+JSON.stringify(values));
        alert("Curent state is:"+JSON.stringify(values));
        this.props.resetFeedbackForm();
        // event.preventDefault();
    }
    // handleBlur=(field)=>(evt)=>{
    //     this.setState({
    //         touched:{...this.state.touched,[field]:true}
    //     })
    // }
    // validate(firstname,lastname,telnum,email){
    //     const errors={
    //         firstname:'',
    //         lastname:'',
    //         telnum:'',
    //         email:''
    //     };
    //     if(this.state.touched.firstname && firstname.length<=3)
    //     errors.firstname="First Name should be >=3 character";
    //     else if (this.state.touched.firstname && firstname.length>10)
    //     errors.firstname="First Name should be <=10 character";

    //     if(this.state.touched.lastname && lastname.length<=3)
    //     errors.lastname="Last Name should be >=3 character";
    //     else if (this.state.touched.lastname && lastname.length>10)
    //     errors.lastname="Last Name should be <=10 character";

    //     const reg=/^\d+$/;
    //     if(this.state.touched.telnum && !reg.test(telnum))
    //     errors.telnum='Tel. Number should contain only number';

    //     if(this.state.touched.email && email.split('').filter(x=>x==='@').length!==1)
    //     errors.email='Email should containa @';
    //     return errors;
    // }
    
    render(){
        // const errors=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact us</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send your feedback</h3>
                    </div>
                    <div className='col-12 md-9'>
                        <Form model='feedback' onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                {/* valid={errors.firstname===''} */}
                                {/* invalid={errors.firstname !==''} name="firstname" onBlur={this.handleBlur('firstname')} placeholder="First Name" value={this.state.firstname} onChange={this.handleInputChange} */}
                                    <Control.text  id="firstname" model=".firstname" validators={{required,minLength:minLength(3),maxLength:maxLength(15)}} className='form-control'  />
                                    <Errors className='text-danger' model='.firstname' show='touched' messages={{
                                        required:'Required ',
                                        minLength:'Must be greater than 2 character ',
                                        maxLength:'Must be 15 character or less '
                                    }}/>
                                    {/* <FormFeedback>{errors.firstname}</FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                {/* valid={errors.lastname===''} invalid={errors.lastname !==''} name="lastname" onBlur={this.handleBlur('lastname')} placeholder="Last Name" onChange={this.handleInputChange} value={this.state.lastname} */}
                                    <Control.text model='.lastname' className='form-control'  id="lastname" validators={{required,minLength:minLength(3),maxLength:maxLength(15)}}   />
                                    <Errors className='text-danger' model='.lastname' show='touched' messages={{
                                        required:'Required ',
                                        minLength:'Must be greater than 2 character ',
                                        maxLength:'Must be 15 character or less '
                                    }}/>
                                    {/* <FormFeedback>{errors.lastname}</FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="tellnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                {/* valid={errors.telnum===''}  onBlur={this.handleBlur('telnum')} invalid={errors.telnum !==''} name="telnum" placeholder="Tel. Number" onChange={this.handleInputChange} value={this.state.telnum} */}
                                    <Control.text model='.telnum' validators={{required,minLength:minLength(3),maxLength:maxLength(10),isNumber}}  className='form-control' id="telnum" />
                                    {/* <FormFeedback>{errors.telnum}</FormFeedback> */}
                                    <Errors className='text-danger' model='.telnum' show='touched' messages={{
                                        required:'Required ',
                                        minLength:'Must be greater than 2 number ',
                                        maxLength:'Must be 15 number or less ',
                                        isNumber:'Must be a number '
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                {/* valid={errors.email===''} invalid={errors.email !==''} name="email" onChange={this.handleInputChange}  onBlur={this.handleBlur('email')} placeholder="Email" value={this.state.email} */}
                                    <Control.text model='.email'  validators={{required,validEmail}} className='form-control' id="email" />
                                    {/* <FormFeedback>{errors.email}</FormFeedback> */}
                                    <Errors className='text-danger' model='.email' show='touched' 
                                    messages={{
                                        required:'Required ',
                                        validEmail:'Invalid email adress '
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6,offset:2}}>
                                    <div className='form-check'>
                                        <Label check>
                                        {/* onChange={this.handleInputChange}  checked={this.state.agree} */}
                                                <Control.checkbox model='.agree' className='form-check-input' name='agree'/>{''}
                                                <strong>May we contact you</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3,offset:1}}>
                                {/* value={this.state.contactType} onChange={this.handleInputChange} */}
                                    <Control.select model='.contactType' name='contactType' className='form-control'>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your FeedBack</Label>
                                <Col md={10}>
                                {/* onChange={this.handleInputChange} value={this.state.message} */}
                                    <Control.textarea model='.message' id="message" name="message" className='form-control' rows="12"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10,offset:2}}>
                                    <Button type="submit" color="primary">Send feedback</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;