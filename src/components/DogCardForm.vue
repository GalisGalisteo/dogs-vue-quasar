<template>
  <q-page padding class="q-pa-lg">
    <div class="shadow-5 rounded-borders q-pa-lg">
      <form @submit.prevent.stop="onSubmit" class="q-pt-md q-gutter-xs">
        <q-card flat>
          <div>
            <q-img
              :src="dogDetails.image"
              spinner-color="white"
              ratio="1"
              width="300px"
            ></q-img>
            <q-file
              display-value=""
              borderless
              v-model="image"
              label="Upload image"
              @update:model-value="handleUpload()"
            />
          </div>

          <q-select
            use-input
            input-debounce="0"
            @filter="filterFn"
            :options="breedOptions"
            clearable
            rounded
            outlined
            v-model="dogDetails.breed"
            label="Breed"
            ref="breedRef"
            :rules="[(val) => !!val || '*required']"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-select
            :options="allColors"
            rounded
            outlined
            clearable
            v-model="dogDetails.color"
            label="Color"
            ref="colorRef"
            :rules="[(val) => !!val || '*required']"
          />
          <q-select
            :options="allSizes"
            rounded
            outlined
            clearable
            v-model="dogDetails.size"
            label="Size"
            ref="sizeRef"
            :rules="[(val) => !!val || '*required']"
          />
          <div class="row justify-center q-pt-sm">
            <q-btn
              rounded
              size="large"
              padding="sm lg"
              color="primary"
              type="submit"
              label="Submit"
            />
          </div>
        </q-card>
      </form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import {
  DogInfo,
  allColors,
  allSizes,
  allBreeds,
  ValidatableObject,
} from './models';

const $q = useQuasar();

const image = ref(null);
const handleUpload = () => {
  console.log('handleUpload is triggered');
  if (image.value) {
    dogDetails.value.image = URL.createObjectURL(image.value);
  }
};

const dogDetails = ref<DogInfo>({
  image:
    'https://res.cloudinary.com/dfqoeq3s7/image/upload/v1705860996/empty-image_zwtfon.jpg',
  breed: '',
  color: '',
  size: '',
});

const breedOptions = ref(allBreeds);

const breedRef = ref<ValidatableObject | null>(null);
const colorRef = ref<ValidatableObject | null>(null);
const sizeRef = ref<ValidatableObject | null>(null);

const filterFn = (val: string, update: (callback: () => void) => void) => {
  update(() => {
    const needle = val.toLowerCase();
    breedOptions.value = allBreeds
      .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
      .filter((v) => v.toLowerCase().indexOf(needle) > -1);
  });
};

const onSubmit = () => {
  console.log(dogDetails.value);

  breedRef.value?.validate();
  colorRef.value?.validate();
  sizeRef.value?.validate();

  if (
    breedRef.value?.hasError ||
    colorRef.value?.hasError ||
    sizeRef.value?.hasError
  ) {
    console.log(breedRef.value?.hasError);
    return;
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted',
    });
  }
};
</script>

<style scoped></style>
