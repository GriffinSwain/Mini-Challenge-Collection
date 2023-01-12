//Griffin Parker
//October 25, 2022
//Mini Challenge #1 - All Challenges with Endpoints
//This program contains all the mini challenges from 1-9, all of them full operational, except for the MadLibs program

/* How to call the different programs cheatsheet
https://localhost:xxxx/minichallenge/SayHello/{name}
https://localhost:xxxx/minichallenge/Add2Numbers/{num1}/{num2}
https://localhost:xxxx/minichallenge/Questions/{name}/{time}
https://localhost:xxxx/minichallenge/GreaterLess/{num1}/{num2}
https://localhost:xxxx/minichallenge/MadLibs
https://localhost:xxxx/minichallenge/OddOrEven/{number}
https://localhost:xxxx/minichallenge/ReverseIt/{string}
https://localhost:xxxx/minichallenge/RestaurantPicker/{"good", "bad" or "decent"}
https://localhost:xxxx/minichallenge/Magic8Ball
*/

using Microsoft.AspNetCore.Mvc;

namespace MiniChallengesWebAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class MiniChallengeController : ControllerBase
{
    [HttpGet]
    [Route("SayHello/{name}")]
    public string SayHello(string name)
    {
        return $"Hello {name}! You are using me.";
    }

    [HttpGet]
    [Route("AddingNumbers/{number1}/{number2}")]
    public int Add2Numbers(int number1, int number2)
    {
        return number1 + number2;
    } 

    [HttpGet]
    [Route("AskingQuestions/{nombre}/{time}")]
    public string Questions(string nombre, string time)
    {
        return $"You are {nombre} and you woke up at {time}!";
    }

    [HttpGet]
    [Route("GreaterOrLess/{num1}/{num2}")]
    public string GreaterLess(int num1, int num2)
    {
    if (num1 > num2) return (num1 + " is greater than "+ num2);
    if (num1 < num2) return (num1 + " is lesser than " + num2);
    if (num1 == num2) return (num1 + " is equal to " + num2);
    return "Cool";
    }

    [HttpGet]
    [Route("MadLibs")]
    public string MadLibs()
    {
        return "this will give you a whole story that has the different inputs made by the user incorporated into the story";
    }

    [HttpGet]
    [Route("OddOrEven/{number}")]
    public string OddOrEven(int number)
    {
    if(number % 2 == 0)
    {return "This is an even number";
    }else return "this is an odd number";
    }

    [HttpGet]
    [Route("ReverseIt/{input}")]
    public string ReverseIt(string input)
    {
    string reverse = ""; 
    for(int i = input.Length - 1; i >= 0; i--) reverse = reverse + input[i];
    return $"{input} backwards is {reverse}";
    }

    [HttpGet]
    [Route("RestaurantPicker/{restaurant}")]

    public string RestaurantPicker(string restaurant)
    {
        string picked = "";
        restaurant = restaurant.ToLower();
    string [] badRestaurants = {"Applebees", "Olive Garden", "McDonalds", "Burger King", "Del Taco", "Domino's", "Subway", "Your Nearest Greasy Chinese Restaurant", "Denny's", "Mimi's Cafe"};
    string [] decentRestaurants = {"In-n-Out", "Wendy's", "Five Guys", "Rubio's", "Your Local Taco Truck", "Taco Bell", "Old Spaghetti Factory", "PizzaHut", "Togo's", "Papa John's"};
    string [] goodRestaurants = {"Shadowbrook", "Smack Pie", "Market Tavern", "Papapavlo's", "The Creamery", "Fenton's", "The Dancing Fox", "Michael David Winery", "Prime Table Steakhouse", "Misaki Sushi"};
        Random rndNum = new Random();
        int num = rndNum.Next(0, 9);
        if (restaurant == "good") picked = goodRestaurants[num];
        if (restaurant == "decent") picked = decentRestaurants[num];
        if (restaurant == "bad") picked = badRestaurants[num];
        return $"You should eat at {picked}";
    }
    }
