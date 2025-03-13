<template>
  <div class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-yellow-500">
        Our Delicious Pizzas
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="pizza in pizzas"
          :key="pizza.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <img
            :src="pizza.image"
            :alt="pizza.name"
            class="w-full object-cover animate-spin"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ pizza.name }}</h3>
            <p class="text-gray-600 mb-4">{{ pizza.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-red-600"
                >${{ pizza.price }}</span
              >
              <button
                class="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const pizzas = [
  {
    id: 1,
    name: "Margherita Classic",
    description: "Fresh tomatoes, mozzarella, basil, and our signature sauce",
    price: 14.99,
    image: "/images/pica.png",
  },
  {
    id: 2,
    name: "Pepperoni Supreme",
    description: "Loaded with pepperoni, mozzarella, and special herbs",
    price: 16.99,
    image: "/images/pica.png",
  },
  {
    id: 3,
    name: "Vegetarian Delight",
    description: "Bell peppers, mushrooms, onions, olives, and fresh tomatoes",
    price: 15.99,
    image: "/images/pica.png",
  },
  {
    id: 4,
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions, and cilantro",
    price: 17.99,
    image: "/images/pica.png",
  },
  {
    id: 5,
    name: "Hawaiian Paradise",
    description: "Ham, pineapple, and extra mozzarella cheese",
    price: 16.99,
    image: "/images/pica.png",
  },
  {
    id: 6,
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, and ground beef",
    price: 18.99,
    image: "/images/pica.png",
  },
];
</script>
