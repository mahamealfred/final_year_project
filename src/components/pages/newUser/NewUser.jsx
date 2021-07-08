import "./newUser.css";

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form  className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="Maheme" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Maheme Alfred" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="maheme@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+250789647463" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Kigali| Rwanda" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                    <input type="radio" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" id="female" value="female" />
                    <label for="female">Female</label>
                    </div>
                   
                </div>
            </form>
        </div>
    )
}
