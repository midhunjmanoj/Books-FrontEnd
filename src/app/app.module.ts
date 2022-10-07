import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { BookDetailPageComponent } from './pages/book-detail-page/book-detail-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';
import { WhishlistComponent } from './components/whishlist/whishlist.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ViewCategoryComponent } from './components/view-category/view-category.component';
import { ViewCategoryPageComponent } from './pages/view-category-page/view-category-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    CartPageComponent,
    WishlistPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    BookDetailPageComponent,
    CategoriesComponent,
    BookListComponent,
    HeaderComponent,
    OrderPageComponent,
    OrderComponent,
    CartComponent,
    WhishlistComponent,
    CategoryPageComponent,
    ViewCategoryComponent,
    ViewCategoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
