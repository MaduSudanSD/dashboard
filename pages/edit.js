import Head from 'next/head'

export default function Home() {
    return (
        <div className={"container"}>
            <Head>
                <title>Deploy App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <form className="form-floating my-3 needs-validation" action="/api/deploy" method="post">
                <div className="mb-3 form-floating">
                    <input type="text" className="form-control" name="deployedBy" required />
                    <label htmlFor="deployedBy" className="form-label">Deployed By</label>
                </div>
                <div className="mb-3 form-floating">
                    <textarea className="form-control" style={{ "height": "100px" }} name="content" required></textarea>
                    <label htmlFor="content">Content</label>
                </div>    
                <div className="row g-3 mb-3">
                    <div className="col">
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="deploymentStatus">Deployment Status</label>
                            <select className="form-select" name="deploymentStatus" defaultValue={'DEFAULT'} required>
                                <option value='DEFAULT' disabled>Choose...</option>
                                <option value="Done">Done</option>
                                <option value="In progress">In progress</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Deployment Date</span>
                            <input type="date" className="form-control" name="deploymentDate" required />
                        </div>
                    </div>
                </div>
                <input className="btn btn-dark me-2" type="submit"value="Submit" />
                <input className="btn btn-dark ms-2" type="reset" value="Reset" />
            </form>
        </div>
    )
}