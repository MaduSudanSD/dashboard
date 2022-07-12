import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { connectToDatabase } from "../utils/mongodb";

export default function Test(props) {
    console.log(props);
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>date</th>
                        <th>content</th>
                        <th>deploymentDate</th>
                        <th>deploymentStatus</th>
                        <th>deployedBy</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    props.projects.map((project) => (
                        <tr key={project._id}>
                            <td>{project._id}</td>
                            <td>{project.date}</td>
                            <td>{project.content}</td>
                            <td>{project.deploymentDate}</td>
                            <td>{project.deploymentStatus}</td>
                            <td>{project.deployedBy}</td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </div>
    )
}

export async function getServerSideProps(context) {

    const { db } = await connectToDatabase();
    const projects = await db.collection('FirstProject').find({}).toArray();

    return {
        props: {
            projects: JSON.parse(JSON.stringify(projects))
        }, // will be passed to the page component as props
    }
}
