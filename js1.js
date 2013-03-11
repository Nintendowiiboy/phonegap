var dev = navigator.platform;
echo("You are currently using " + dev);
   
function selectedChanged(){

 var e = document.getElementById("choice");
 var s = e.options[e.selectedIndex].value;

 switch (s){

  case "Choose...":
   document.getElementById("text").innerHTML = "Please select a choice from above!";
   document.getElementById("text2").innerHTML = "Please select a choice from above!";
  break;

  case "Electronics":
   document.getElementById("text").innerHTML = "Place electronic(s) in recycle bins, or donate to a charity.";
   document.getElementById("text2").innerHTML = "Use refurbished electornics.";
  break;

  case "Pharmeceuticals":
   document.getElementById("text").innerHTML = "Use completely up, then wrap containers in plastic and place in the trash.  Hold for collection days if possible.  Do not pour down sink or into toilet.";
   document.getElementById("text2").innerHTML = "Use natural organic options, if available, after consulting your doctor.";
  break;

  case "Ink and toner cartridges":
   document.getElementById("text").innerHTML = "Wrap in plastic and place in trash or sned it out to be recycled.";
   document.getElementById("text2").innerHTML = "Use remanufacutred cartridges.";
  break;

  case "Newspaper":
   document.getElementById("text").innerHTML = "Recycle either through a charity or county organization.";
   document.getElementById("text2").innerHTML = "Buy recycled paper.";
  break;

  case "Cardboard":
   document.getElementById("text").innerHTML = "Recycle either through a charity or county organization.";
   document.getElementById("text2").innerHTML = "Buy recycled paper.";
  break;

  case "Other Paper":
   document.getElementById("text").innerHTML = "Recycle either through a charity or county organization.";
   document.getElementById("text2").innerHTML = "Buy recycled paper.";
  break;

  case "Cleaners Using Ammonia":
   document.getElementById("text").innerHTML = "Use all products up, rinse containers before placing in trash";
   document.getElementById("text2").innerHTML = "Mixture of salt, vinegar, water, or baking soda/water for tub and tile.";
  break;

  case "Bleach Cleaners":
   document.getElementById("text").innerHTML = "Use up contents, rinse containers before placing in trash.";
   document.getElementById("text2").innerHTML = "Use borax, sodium hexametaphosphate, or dry oxygen bleaches.";
  break;

  case "Disinfectants":
   document.getElementById("text").innerHTML = "Use up contents, then rinse container and place in trash.";
   document.getElementById("text2").innerHTML = "Use soap and hot water, mixture of 1/2 cup borax with 1 gallon hot water, isopropyl alcohol.";
  break;

  case "Drain Cleaners":
   document.getElementById("text").innerHTML = "Use up product, then rinse container before placing in trash; save excess for hazardous waste amnesty days.";
   document.getElementById("text2").innerHTML = "Use plunger, boiling water, baking soda, and vinegar mixture.";
  break;

  case "Polishes":
   document.getElementById("text").innerHTML = "Use up and rinse container for disposal in trash, save excess for hazardous waste amnesty days.";
   document.getElementById("text2").innerHTML = "Use 1 part lemon juice and 2 parts olive or vegetable oil for furniture; for shoes use olive or walnut oil, or lemon juice.";
  break;

  case "Metal Cleaners &amp; Polishes":
   document.getElementById("text").innerHTML = "Use up and rinse container for disposal in trash, save excess for hazardous waste amnesty days.";
   document.getElementById("text2").innerHTML = "For most metals use vinegar or vinegar/salt mixture; for gold use toothpaste; for silver soak in boiling water with baking soda and strips of aluminum foil.";
  break;

  case "Oven Cleaners":
   document.getElementById("text").innerHTML = "Use up and rinse container for disposal in trash, save excess for hazardous waste amnesty days.";
   document.getElementById("text2").innerHTML = "Use baking soda and water rubbed in with fine steel wool.";
  break;

  case "Rug Cleaners":
   document.getElementById("text").innerHTML = "Use up and rinse container for disposal in trash, save excess for hazardous waste amnesty days.";
   document.getElementById("text2").innerHTML = "Sprinkle cornstarchon rug and vacuum after 1 hour.";
  break;

  case "Toilet Bowl Cleaner":
   document.getElementById("text").innerHTML = "Use up and rinse container for disposal in trash, save excess for hazardous waste amnesty days.";
   document.getElementById("text2").innerHTML = "Use baking soda or a mild detergent.";
  break;

  case "Grease/Rust Solvents":
   document.getElementById("text").innerHTML = "Use up and rinse container for disposal in trash, save excess for hazardous waste amnesty days.";
   document.getElementById("text2").innerHTML = "Use water based paints, sand paper to remove.";
  break;

  case "Air Fresheners":
   document.getElementById("text").innerHTML = "Dispose of in trash after drying.";
   document.getElementById("text2").innerHTML = "Open dish of vinegar.";
  break;

  case "Glues/Adhesives":
   document.getElementById("text").innerHTML = "Use up and rinse container for disposal in trash, save excess for hazardous waste amnesty days.";
   document.getElementById("text2").innerHTML = "Use environmentally-friendly glues.";
  break;

  case "Mothballs":
   document.getElementById("text").innerHTML = "Store for hazardous waste amnesty days.";
   document.getElementById("text2").innerHTML = "Use cedar chips, flower petals, newspaper, or lavendar.";
  break;

  case "Photographic Chemicals":
   document.getElementById("text").innerHTML = "Use up and rinse container for disposal in trash, save excess for hazardous waste amnesty days.";
   document.getElementById("text2").innerHTML = "Have photos developed by a professional.";
  break;

  case "Stains/Finishers/Wood Preservatives":
   document.getElementById("text").innerHTML = "Use up and rinse container for disposal in trash, save excess for hazardous waste amnesty days.";
   document.getElementById("text2").innerHTML = "Use latex finishes.";
  break;

  case "Pool Chemicals":
   document.getElementById("text").innerHTML = "Use up and rinse container for disposal in trash, save excess for hazardous waste amnesty days.";
   document.getElementById("text2").innerHTML = "Use ozone or ultraviolet lighting systems.";
  break;

  case "Thinners/Turpentine":
   document.getElementById("text").innerHTML = "Use up and rinse container for disposal in trash, save excess for hazardous waste amnesty days.";
   document.getElementById("text2").innerHTML = "Use latex finishes.";
  break;

  case "Used Motor Oil":
   document.getElementById("text").innerHTML = "Many parts stores, service stations and local county landfills will take this and recycle it.";
   document.getElementById("text2").innerHTML = "None.";
  break;

  case "Used Antifreeze":
   document.getElementById("text").innerHTML = "Collect it and pour it only down a drain that goes to a sewer plant, not a septic tank. Do not pour on ground or in storm drains.";
   document.getElementById("text2").innerHTML = "Use environmentally friendly antifreeze.";
  break;

  case "Used Batteries":
   document.getElementById("text").innerHTML = "Trade lead acid batteries when replacing, collect others and provide separately to county.";
   document.getElementById("text2").innerHTML = "None.";
  break;

  case "Old Tires":
   document.getElementById("text").innerHTML = "Take to recycler or exchange when buying new tires.";
   document.getElementById("text2").innerHTML = "None.";
  break;

  case "Automotive Brake Fluid":
   document.getElementById("text").innerHTML = "Take to service station or oil recycling center.";
   document.getElementById("text2").innerHTML = "None.";
  break;

  case "Automotive Transmission Fluid":
   document.getElementById("text").innerHTML = "Take to service station or oil recycling center.";
   document.getElementById("text2").innerHTML = "None.";
  break;

  case "Windshield Wiper Fluid":
   document.getElementById("text").innerHTML = "Take to hazardous waste facility or wait for community hazardous waste amnesty days; do not put in septic tank.";
   document.getElementById("text2").innerHTML = "None.";
  break;

  case "Gasoline/Diesel":
   document.getElementById("text").innerHTML = "Take to specialized reclaimation center.";
   document.getElementById("text2").innerHTML = "None.";
  break;

  case "Car Wax":
   document.getElementById("text").innerHTML = "Allow to harden and put in a regular landfill.";
   document.getElementById("text2").innerHTML = "None.";
  break;

  case "Spent Lightbulbs":
   document.getElementById("text").innerHTML = "Take to your nearest county landfill or send to a recycler.";
   document.getElementById("text2").innerHTML = "Switch to low mercury fluorescent light bulbs.";
  break;

  case "Pesticides/Herbicides/Fertilizers":
   document.getElementById("text").innerHTML = "Use up all material and properly dispose of container following instructions on label; wrap in plastic and put in garbage.";
   document.getElementById("text2").innerHTML = "Use dishwater or other soap & water on leaves, then rinse; use mixture of baking soda/powdered sugar for roaches; clean surface with vinegar to control ants; citronella or powdered brewer's yeast flea/tick control.";
  break;

  case "Abrasive Household Cleaners":
   document.getElementById("text").innerHTML = "Use product up, rinse container and dispose of container.";
   document.getElementById("text2").innerHTML = "Use 1/2 lemon dipped in borax.";
  break;

  case "Aerosol Cans":
   document.getElementById("text").innerHTML = "Allow all propellant to escape, then place in landfill or take to scrap metal recycler.";
   document.getElementById("text2").innerHTML = "Use pump spray systems or roll on systems.";
  break;

  case "Oil Based Paint":
   document.getElementById("text").innerHTML = "Collect and save for hazardous waste amnesty days.";
   document.getElementById("text2").innerHTML = "Switch to water based paints.";
  break;

  case "Empty Paint Cans":
   document.getElementById("text").innerHTML = "Leave the cans open to air dry after the contents have been used and place seperately in garbage collection or take to scrap metal recycler.";
   document.getElementById("text2").innerHTML = "Use vinyl siding, stucco, etc.";
  break;

  case "Aluminum Cans":
   document.getElementById("text").innerHTML = "Recycle either through a charity or county organization.";
   document.getElementById("text2").innerHTML = "Use paper bags, paper cartons, buy recycled paper.";
  break;

  case "Plastic or Glass Bottles":
   document.getElementById("text").innerHTML = "Recycle either through a charity or county organization.";
   document.getElementById("text2").innerHTML = "Use paper bags, paper cartons, buy recycled paper.";
  break;

  case "Plastic Bags":
   document.getElementById("text").innerHTML = "Recycle either through a charity or county organization.";
   document.getElementById("text2").innerHTML = "Use paper bags, paper cartons, buy recycled paper.";
  break;

 }
}

function refresh(){
 document.location.reload();
}

function goTo(a){
 document.getElementById("main").style.display = "none";
 document.getElementById("help").style.display = "none";
 document.getElementById("about").style.display = "none";
 document.getElementById("zipdiv").style.display = "none";
 document.getElementById("choose").innerHTML = "";
 document.getElementById("zip").value = "";
 document.getElementById(a).style.display = "inline";
}

function aquire(m){
 var e = document.getElementById("typeOfSearch");
 var s = e.options[e.selectedIndex].value;

 if (s != "Choose One"){
  if (m != "ZIP"){
   navigator.geolocation.getCurrentPosition(function (p){
    document.location = "http://maps.google.com/maps?q=" + s + " near " + p.coords.latitude + ", " + p.coords.longitude;
   });
  }else{
   var z = document.getElementById("zip").value;
   document.location = "http://maps.google.com/maps?q=" + s + " near " + z;
  }
 }
 else{
  document.getElementById("choose").innerHTML = "Must choose one.";
 }
}

