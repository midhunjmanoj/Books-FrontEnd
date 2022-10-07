import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from "./pages/cart-page/cart-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { WishlistPageComponent } from "./pages/wishlist-page/wishlist-page.component";
import { CategoryPageComponent } from "./pages/category-page/category-page.component";
import { ViewCategoryPageComponent } from "./pages/view-category-page/view-category-page.component";
import { AuthGuard } from './guard/auth.guard';



const routes: Routes = [
    {path:'',redirectTo:'home', pathMatch:'full' },
    {path:'home', component: HomePageComponent },
    {path:'login', component: LoginPageComponent},
    {path:'register', component: RegisterPageComponent},
    {path:'cart', component:CartPageComponent},
    {path: 'wishlist', component:WishlistPageComponent},
    {path:'category', component:CategoryPageComponent},
    {path:'viewcategory/:catId', component:ViewCategoryPageComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}