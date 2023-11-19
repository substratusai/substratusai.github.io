---
slug: calculating-gpu-memory-for-llm
title: "Calculating GPU memory for serving LLMs"
authors:
- name: Sam Stoelinga
  title: Engineer
  url: https://github.com/samos123
tags: [llm, gpu, memory]
image: /img/llm-gpu-mem-formula.png
---

How many GPUs do I need to be able to serve Llama 70B? In order
to answer that, you need to know how much GPU memory will be required by
the Large Language Model.

The formula is simple:
$$
M = \dfrac{(P * 4B)}{ (32  / Q)} * 1.2
$$
| Symbol      | Description |
| ----------- | ----------- |
| M      | GPU memory expressed in Gigabyte       |
| P      | The amount of parameters in the model. E.g. a 7B model has 7 billion parameters.       |
| 4B   | 4 bytes, expressing the bytes used for each parameter        |
| 32   | There are 32 bits in 4 bytes        |
| Q   | The amount of bits that should be used for loading the model. E.g. 16 bits, 8 bits or 4 bits.       |
| 1.2   | Represents a 20% overhead of loading additional things in GPU memory.|

Now let's try out some examples.

### GPU memory required for serving Llama 70B
Let's try it out for Llama 70B that we will load in 16 bit.
The model has 70 billion parameters.
$$
\dfrac{70  * 4 \mathrm{bytes}}{32 / 16} * 1.2 = 168\mathrm{GB}
$$
That's quite a lot of memory. A single A100 80GB wouldn't be enough, although
2x A100 80GB should be enough to serve the Llama 2 70B model in 16 bit mode.

**How to further reduce GPU memory required for Llama 2 70B?**

Quantization is a method to reduce the memory footprint. Quantization is able to do this by reducing the precision of the model's parameters from floating-point to lower-bit representations, such as 8-bit integers. This process significantly decreases the memory and computational requirements, enabling more efficient deployment of the model, particularly on devices with limited resources. However, it requires careful management to maintain the model's performance, as reducing precision can potentially impact the accuracy of the outputs.

In general, the consensus seems to be that 8 bit quantization achieves similar performance to using 16 bit. However, 4 bit quantization could have a noticeable impact to the model performance.

Let's do another example where we use **4 bit quantization of Llama 2 70B**:
$$
\dfrac{70  * 4 \mathrm{bytes}}{32 / 4} * 1.2 = 42\mathrm{GB}
$$
This is something you could run on 2 x L4 24GB GPUs.

### Relevant tools and resources
1. [Tool for checking how many GPUs you need for a specific model](https://huggingface.co/spaces/Vokturz/can-it-run-llm)
2. [Transformer Math 101](https://blog.eleuther.ai/transformer-math/)

Got more questions? Don't hesitate to join our Discord and ask away.

<a href="https://discord.gg/JeXhcmjZVm">
<img alt="discord-invite" src="https://dcbadge.vercel.app/api/server/JeXhcmjZVm?style=flat" />
</a>
