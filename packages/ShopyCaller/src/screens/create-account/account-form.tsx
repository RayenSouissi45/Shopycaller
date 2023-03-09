import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from 'react-native';
import * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/ui';

const schema = z.object({
  Phone: z
    .string({
      required_error: 'Telephone is required',
    })
    .regex(/^\d+$/) // validate that the input value contains only digits
    .min(8)
    .max(8),
  FirstNameAndLastName: z
    .string({
      required_error: 'First name and last name are required',
    })
    .regex(
      /^[A-Za-z]+ [A-Za-z]+$/,
      'First name and last name must be two words separated by a space'
    ),
  Email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  AdresseDeLivraison: z.string({
    required_error: 'Adresse de livraison est requis',
  }),
});

export type FormType = z.infer<typeof schema>;

type Props = {
  onSubmit?: (data: FormType) => void;
};
//const [toggle, setToggle] = useState(false);

export const AccountForm = ({}: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { handleSubmit, control, reset } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const onSubmit = () => {
    reset();
  };
  return (
    <View className="flex justify-center p-4">
      <ControlledInput
        testID="Phone-input"
        control={control}
        name="Phone"
        label="Téléphone"
        keyboardType="numeric"
      />
      <ControlledInput
        testID="FirstNameAndLastName-input"
        control={control}
        name="FirstNameAndLastName"
        label="Nom & Prénom"
      />
      <ControlledInput
        testID="Email-input"
        control={control}
        name="Email"
        label="Email"
      />
      <ControlledInput
        testID="DeliveryAddress-input"
        control={control}
        name="AdresseDeLivraison"
        label="Adresse de livraison"
      />
      <View className="space-x-5 flex-col p-2">
        <View className="flex flex-row border-b border-grey-10 pb-5">
          <Switch
            trackColor={{ false: '#767577', true: '#02F387' }}
            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
            //ios_backgroundColor="#3e3e3e"
            onValueChange={setIsEnabled}
            value={isEnabled}
          />
          <Text className="text-white "> Passer au magasin</Text>
        </View>
        <View className="pt-5">
          <Text className="text-grey-10 text-center text-xs  ">
            Remplir les champs et cliquer sur le bouton d'enregistrement pour
            terminer le {'\n'} processus d'achat.
          </Text>
        </View>
      </View>
      <Button
        variant="outline"
        label="S'enregistrer"
        className="bg-CustomizedGreen-10 rounded-3xl"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};
