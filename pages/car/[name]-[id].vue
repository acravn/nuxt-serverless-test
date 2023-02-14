<script setup>
const route = useRoute()
const { cars } = useCars()

useHead({
    title: `${capitalize(route.params.name)}`
})

definePageMeta({
    layout: "custom"
})

const car = computed(() => {
    return cars.find((c) => {
        return c.id === parseInt(route.params.id)
    })
})

if (!car.value) {
    throw createError({
        statusCode: 404,
        message: `Car with ID of ${route.params.id} doesn't exist`
    })
}

</script>

<template>
    <div v-if="car">
        <CarDetailHero :car="car" />
        <CarDetailAttributes :features="car.features" />
        <CarDetailDescription :description="car.description" />
        <CarDetailContact />
    </div>
</template>