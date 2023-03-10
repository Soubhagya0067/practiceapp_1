import Head from "next/head";
import AddUserForm from "../components/addUserForm";
import Form from "../components/form";
import UpdateUserForm from "../components/UpdateUserForm";
import UserDetails from "../components/UserDetails";
// import Image from 'next/image'
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Practice Application 01</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5">
        <h1 className="text-3xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>
        <div className="container mx-auto flex justify-between border-b py-5 px-10">
          <div className="left flex gap-3">
            <button
              className="flex bg-indigo-500 text-white py-1 px-2 rounded-md
            hover:bg-gray-200 hover:border-indigo-500 hover:text-gray-800"
            >
              Add Employee
            </button>
          </div>
        </div>

        {/* Collapsible form */}

        <Form></Form>
        {/* <AddUserForm/>
        <UpdateUserForm/> */}

        <UserDetails/>
      </main>
    </div>
  );
}
