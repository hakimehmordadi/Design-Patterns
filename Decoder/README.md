# Practice of using Decoder pattern

Decoder is a structural design pattern that allows add behevior to an abject without changing class in runtime. This characteristic makes Decorator very practical and useful. The flexibility of this pattern is very high. If you want to change functionallity of an object you need to just create more decorator.

In other words, The Decorator Pattern uses composition instead of inheritance to extend the functionality of an object at runtime.

Decorator design patterns are most frequently used for applying single responsibility principles since we divide the functionality into classes with unique areas of concern.

# What is composition?

Composition is a whole-part relation. Life time of part is depend to life time of whole. So when whole destroies, part will be destroy as well. (Is Part Of)

# Problem

Imagine that you’re working on a notification library which lets other programs notify their users about important events.



# Solution
You can create an Adapter. This is a special object that converts the interface of one object so that another object can understand it.

Adapters can not only convert data into various formats but can also help objects with different interfaces collaborate.

<p align="center"><img alt="Adapter Pattern" src="assets/adapter.png" /></p>
