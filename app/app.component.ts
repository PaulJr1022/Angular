import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HighlightPipePipe } from './highlight-pipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule, HighlightPipePipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';

  user ={
    userEmail : '',
    userPassword : '',
  }

  actor={
    name:''
  }
  onSubmit() {
      console.log(2);
  }

  searchText='';
  text=`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, nobis? Eligendi, eum beatae necessitatibus recusandae totam rerum amet architecto explicabo harum nihil. Obcaecati iure consequatur fuga minus accusantium non fugiat, blanditiis soluta assumenda cum nesciunt reiciendis reprehenderit, placeat modi porro deleniti dicta nulla aspernatur at? Ad tempore soluta itaque, quidem perspiciatis a, aliquam nisi magnam impedit temporibus tenetur earum quod quos nemo dolores sunt voluptatem iste. Consectetur maiores sequi tempore atque tempora dolore dignissimos in. Ea repellendus, rem nihil expedita porro qui, consequatur, hic quaerat quo neque corrupti tenetur facilis incidunt. Sequi mollitia, eum facere officia suscipit inventore alias totam dignissimos tempora quod enim temporibus non qui beatae unde minima ipsum minus. Alias, dolor voluptas nam est sit aut optio nemo numquam libero facere impedit facilis, delectus ab deleniti. Autem nam explicabo ex eum, nihil nobis sit voluptatibus ipsa consequatur, itaque vero pariatur aliquam doloremque repellat reiciendis cum maiores vel. At omnis et fuga repellendus officia rerum recusandae accusantium aperiam debitis sapiente dolorem aspernatur consectetur quia provident autem est, delectus suscipit dicta mollitia tempora impedit praesentium! Ullam pariatur fugiat, incidunt explicabo mollitia doloremque natus nulla dolore enim illo impedit iusto molestiae obcaecati ipsa nesciunt, quis minus error soluta porro saepe? Tempore voluptatum non doloribus? Tenetur ut consequatur ducimus animi unde quasi, iste consectetur. Sequi cumque atque neque tempora quasi obcaecati aut dicta libero! Soluta, quo quia recusandae ipsam molestiae ullam, temporibus nesciunt praesentium vitae dolorum itaque hic repellat cumque beatae atque tempora quos exercitationem adipisci illum, dignissimos rerum vel in. Mollitia accusantium, molestias cumque perferendis adipisci sapiente, voluptate sit consequatur dicta quisquam totam, non tempora! Delectus eaque iste quaerat, voluptas odit hic veniam necessitatibus laboriosam ducimus cumque eos consequatur nesciunt, a at quod quis quae excepturi autem deleniti nemo sequi veritatis pariatur quidem in. Maiores esse voluptatibus sapiente cum, libero laboriosam ratione ipsum ducimus ex. Facere adipisci nisi fugiat dolorum iusto quae eos veritatis, vero dolor, tempora error aperiam. Veniam reprehenderit quaerat est distinctio reiciendis eos, dicta cum consequatur laborum repellendus nemo sunt! Pariatur non, delectus officia officiis autem porro possimus, dolores debitis laborum qui itaque incidunt dolorum eligendi id. Nemo accusamus, harum sit maiores quibusdam ipsam incidunt qui nobis dolore impedit doloribus. Placeat assumenda, labore nam vero exercitationem explicabo voluptates a et ut ipsum asperiores deserunt voluptatem, impedit voluptas necessitatibus sequi, dolorum consequuntur! Veniam tempora rem iusto fugit minima libero quos necessitatibus mollitia deserunt blanditiis aliquid repudiandae soluta officiis odit doloribus praesentium doloremque, numquam minus officia deleniti non animi veritatis? Eius sit soluta ut quod ex. Sunt, voluptatibus laborum laboriosam nostrum iure eligendi eveniet, veniam, debitis ipsam dolorum omnis error incidunt sapiente dignissimos aliquid qui saepe. Alias, vero eveniet. Nisi natus quasi placeat unde esse magni, molestiae deserunt quas aspernatur veniam quo cumque commodi cupiditate sapiente impedit, odit sit? Laudantium consectetur porro sit tenetur debitis consequatur, minus nemo obcaecati perspiciatis dolorem. Cupiditate repudiandae tenetur repellat iure aut saepe facere maiores distinctio. Adipisci aut possimus quasi sapiente harum nesciunt nam, error dignissimos beatae iste ad asperiores repudiandae quos velit odio!`
}
