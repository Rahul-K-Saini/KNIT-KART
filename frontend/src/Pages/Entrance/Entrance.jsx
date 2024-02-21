import React from 'react';
import "./entrance.css"
function Entrance() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <>
            <form action="" id='login'>
                <div className='field'>
                    <label htmlFor="email">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" name="email" id="email" required />
                </div>
                <div className='field'>
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" name="password" id="password" required />
                </div>
            </form>
        </>
    );
}

export default Entrance;
