import './app.css'
import App from './App.svelte'
import {getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'
import { getFirelord, } from "firelordjs";
import type { MetaTypeCreator } from "firelordjs";

type Example = MetaTypeCreator<{a:1},'abc'>

const firebaseApp = initializeApp({projectId:'any'})
const db = getFirestore()
const example = getFirelord<Example>(db,'abc')


const app = new App({
  target: document.getElementById('app'),
})

export default app
