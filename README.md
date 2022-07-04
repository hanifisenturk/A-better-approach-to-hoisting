# What is hoisting?

Before learning what hoisting is we need to talk about how Javascript works under the hood.

Javascript engine when the Javascript file was loaded, the engine creates a code wrapper that is called "Execution Context".

## The Execution Context

The execution context contains codes currently running and other features beyond the codes. There are two types of execution context in Javascript.(Global Execution Context(GEC) and Function Execution Context(FEC))

GEC is created initially by the engine no matter whether the file has Javascript code or not. The codes that are not inside a function lexically get executed in there.

FEC is created by the engine when a function is called.(Function Invocation)

The execution context is created in two phases in this order: Creation Phase and Execution Phase.

These phases are created in the same way both GEC and FEC.

Let us talk about the "Creation Phase".

### Creation Phase
