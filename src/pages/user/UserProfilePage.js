import NavBar from '../../components/utility/NavBar'
import '../../assest/css/UserProfile.css'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'


const UserProfilePage = () => {










    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [phone, setphone] = useState()
    const [street, setstreet] = useState()
    const [BuildingNum, setBuildingNum] = useState()
    const [city, setcity] = useState()
    const [zipcode, setzipcode] = useState()
    const [email, setemail] = useState()
    const [img, setImg] = useState()
    const [SelectedFile, setSelectedFile] = useState('')

    const [UserUpdate, setUserUpdate] = useState({})

    const [Loading, setLoading] = useState(true)
    const [ButtonSubmit, setButtonSubmit] = useState('Update')
    const [OnDisable, setOnDisable] = useState(true)
    const [Ispress, setIspress] = useState(false)


    const onImgChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }
    }
    const onFirstNameChange = (e) => {
        e.persist()
        setfirstname(e.target.value)
    }
    const onLastNameChange = (e) => {
        e.persist()
        setlastname(e.target.value)
    }
    const onPhoneChange = (e) => {
        e.persist()
        setphone(e.target.value)
    }
    const onStreetChange = (e) => {
        e.persist()
        setstreet(e.target.value)
    }
    const onBuildingNumChange = (e) => {
        e.persist()
        setBuildingNum(e.target.value)
    }
    const onCityChange = (e) => {
        e.persist()
        setcity(e.target.value)
    }
    const onZipCodeChange = (e) => {
        e.persist()
        setzipcode(e.target.value)
    }
    const onEmailChange = (e) => {
        e.persist()
        setemail(e.target.value)
    }

    const Validation = () => {
        let Info = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            street: "",
            BuildingNum: "",
            city: "",
            zipcode: "",
            img: "",
        }
        if (firstname) {
            Info.firstname = firstname
        }
        if (lastname) {
            Info.lastname = lastname
        }
        if (phone) {
            Info.phone = phone
        }
        if (street) {
            Info.street = street
        }
        if (BuildingNum) {
            Info.BuildingNum = BuildingNum
        }
        if (city) {
            Info.city = city
        }
        if (zipcode) {
            Info.zipcode = zipcode
        }
        if (email) {
            Info.email = email
        }
        if (SelectedFile) {
            Info.img = SelectedFile
        }

        return Info
    }

    const isValidEmail = (email) => {
        // Basic email validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    const handelSubmit = async (e) => {
       
    }






    return (
        <div className='ProfilePage'>

            <NavBar />

            <div class="container">
                <div class="row gutters">

                    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12" style={{ height: '230px', marginTop: '5rem' }}>
                        <div class="text-light card h-100" style={{ backgroundColor: 'grey' }}>
                            <div class="card-body">
                                <div class="account-settings">

                                    <div class="user-profile">
                                        <div class="user-avatar" style={{ position: 'relative' }}>
                                            <img src={img} alt="Maxwell Admin" style={{ zIndex: '1000' }} />
                                            <input onChange={onImgChange} disabled={OnDisable} type='file' alt='image_profile' style={{ position: 'absolute', border: 'red solid 1px', width: '5rem', height: '5rem', borderRadius: '50%', cursor: 'pointer', marginLeft: '-5.3rem', opacity: 0, zIndex: '100000' }} />
                                        </div>
                                        <h5 class="user-name">  { 'your name'}  </h5>
                                        <h6 class="user-email"> {'your email'}  </h6>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 " style={{ marginTop: '5rem' }}>
                        <div class="card h-100">
                            <div class="card-body">
                                <div class="row gutters">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="firstname"> First name </label>
                                            <input value={firstname} onChange={onFirstNameChange} disabled={OnDisable} type="text" class="form-control my-3" id="firstname" placeholder="Enter first name" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="lastname"> Last name </label>
                                            <input value={lastname} onChange={onLastNameChange} disabled={OnDisable} type="text" class="form-control my-3" id="lastname" placeholder="Enter last name" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="phone">Phone</label>
                                            <input value={phone} onChange={onPhoneChange} disabled={OnDisable} type="tel" class="form-control my-3" id="phone" placeholder="Enter phone number" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="email"> email </label>
                                            <input value={email} onChange={onEmailChange} disabled={OnDisable} type="email" class="form-control my-3" id="email" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>

                                <div class="row gutters">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="Street">Street</label>
                                            <input value={street} onChange={onStreetChange} disabled={OnDisable} type="name" class="form-control my-3" id="Street" placeholder="Enter Street" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="ciTy">City</label>
                                            <input value={city} onChange={onCityChange} disabled={OnDisable} type="name" class="form-control my-3" id="ciTy" placeholder="Enter City" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="sTate">Building number</label>
                                            <input value={BuildingNum} onChange={onBuildingNumChange} disabled={OnDisable} type="number" class="form-control my-3" id="sTate" placeholder="Enter Building number" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="zIp">Zip Code</label>
                                            <input value={zipcode} onChange={onZipCodeChange} disabled={OnDisable} type="text" class="form-control my-3" id="zIp" placeholder="Zip Code" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row gutters">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="d-flex justify-content-end">
                                            {/* <button type="button" id="submit" name="submit" class="btn btn-secondary mx-2">Cancel</button> */}
                                            <button onClick={handelSubmit} type="button" id="submit" name="submit" class="btn text-light" style={{ backgroundColor: ButtonSubmit === 'Save' ? '#E28B15' : 'green', width: '7rem' }}> {ButtonSubmit} </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserProfilePage