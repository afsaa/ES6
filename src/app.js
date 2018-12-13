import { song, getSongInfo } from "./destructObjects"; // This way of import is for multiple things.
import Person from "./classes"; // This way of import is used when we use export default.

const person = new Person("Brandon", 23, "brand@gmail.com");
const { title, band } = song;

getSongInfo({ title, band });
person.showGreeting("Hola mundo");
document.write(person.showInfo());
