//This is the title for your window tab, and your Radar
document.title = "Microservice (2015)";


//This is the concentic circles that want on your radar
//budding stage: do not develop or think too much
var radar_arcs = [
                   {'r':100,'name':'Explore'}
                  ,{'r':200,'name':'Expand'}
                  ,{'r':300,'name':'Maturity'}
                  //,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 800;
var w = 1000;

var radar_data = [
    { "quadrant": "Practice",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items": [
            {"name":"Coding architects", "pc":{"r":90,"t":170},"movement":"c"},
            {"name":"Blue/Read Deployment", "pc":{"r":110,"t":165},"movement":"c"},   
            {"name":"CI", "pc":{"r":110,"t":165},"movement":"c"},            
            { "name": "Health Monitor", "pc": { "r": 125, "t": 120 }, "movement": "c" },
            { "name": "Stateless", "pc": { "r": 135, "t": 120 }, "movement": "c" },                
            {"name":"Gray Deployment", "pc":{"r":205,"t":120},"movement":"c"},
            { "name": "Realtime Alarm", "pc": { "r": 225, "t": 120 }, "movement": "c" },
            {"name":"Automated Remediation", "pc":{"r":250,"t":165},"movement":"c"}                              
        ]
    },
    { "quadrant": "Methodology",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            { name: 'Fast Coding', pc: { r: 70, t: 19 }, movement: 'c' },
            { name: 'REST API', pc: { r: 99, t: 19 }, movement: 'c' },
            { name: 'one service per DB schema', pc: { r: 105, t: 19 }, movement: 'c' },
            { "name": "The Twelve-Factor App", "pc": { "r": 110, "t": 165 }, "movement": "c" },
            { name: 'Semantic API', pc: { r: 120, t: 19 }, movement: 'c' },
            { name: 'React Programming', pc: { r: 170, t: 19 }, movement: 't' },
            { name: 'DDD', pc: { r: 190, t: 19 }, movement: 't' },
            
            { name: 'Function as Service', pc: { r: 270, t: 19 }, movement: 't' },                                   
            { name: 'Actor', pc: { r: 270, t: 19 }, movement: 't' }
  ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [

            { "name": "Native OS", "pc": { "r": 30, "t": 260 }, "movement": "t" },
            { name: 'nginx', pc: { r: 80, t: 278 }, movement: 'c' },
            { name: 'DNS', pc: { r: 90, t: 278 }, movement: 'c' },
            { "name": "EC2", "pc": { "r": 110, "t": 195 }, "movement": "c" },   
            { "name": "Container", "pc": { "r": 130, "t": 230 }, "movement": "c" },
            
            { "name": "flume", "pc": { "r": 180, "t": 195 }, "movement": "c" },
            { "name": "Elastic Search", "pc": { "r": 190, "t": 195 }, "movement": "c" },                        
            { "name": "Kafkar", "pc": { "r": 230, "t": 195 }, "movement": "c" },                        
            { "name": "Mesos", "pc": { "r": 270, "t": 225 }, "movement": "c" },     
            {"name":"Open Stack", "pc":{"r":270,"t":225},"movement":"c"}            

        ]
    },
    { "quadrant": "Frameworks & Tools",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            { name: 'Spring Boot', pc: { r: 60, t: 290 },  movement: 'c' },
            { name: 'Rails', pc: { r: 60, t: 310 },  movement: 'c' },
            { name: 'Nodejs', pc: { r: 60, t: 278 }, movement: 'c' },            
            { "name": "Java 8", "pc": { "r": 130, "t": 355 }, "movement": "c" },        
            { name: 'ZooKeeper', pc: { r: 140, t: 298 }, movement: 'c', domain: 'template' },       
            { name: 'Akka', pc: { r: 150, t: 298 }, movement: 'c', domain: 'template' },
            { "name": "API Gateway（kong，loopback）", "pc": { "r": 180, "t": 355 }, "movement": "c" },
            {"name":"Zuul", "pc":{"r":190,"t":355},"movement":"c"},                      
            {"name":"Swift", "pc":{"r":280,"t":300},"movement":"c"},
            {"name":"Scala - the simple parts ^", "pc":{"r":290,"t":320},"movement":"c"}            
         
        ]
    }
];
