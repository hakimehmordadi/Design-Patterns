# Practice of using Adapter pattern

Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

# Problem

Imagin you are creating a traveler monitoring app. The app downloads the travelers data from multiple resources in XML format. You want to display data in well-looking way.

But there’s a catch: your app only works with data in JSON format.

You can change your liberary to could work with XML, However this might break some existing codes. 

# Solution
You can create an Adapter. This is a special object that converts the interface of one object so that another object can understand it.

Adapters can not only convert data into various formats but can also help objects with different interfaces collaborate.