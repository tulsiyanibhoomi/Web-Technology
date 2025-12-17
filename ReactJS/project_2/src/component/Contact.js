function Contact(){
    return(
        <>
            <h1>Contact Page</h1>
            <form>
                <table>
                    <tr>
                        <td>
                            <label>
                                Username
                            </label>
                        </td>
                        <td>:</td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Password 
                            </label>
                        </td>
                        <td>:</td>
                        <td>
                            <input type="password" />
                        </td>
                    </tr>
                </table>
            </form>
        </>
    );
}
export default Contact;