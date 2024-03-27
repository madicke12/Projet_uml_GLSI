"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form ,FormField ,FormDescription ,FormControl ,FormItem,FormMessage, FormLabel} from "./ui/form"
import {Input} from './ui/input'
import { Button } from "./ui/button"

const formSchema = z.object({
  Prenom: z.string().min(2, {
    message: "Prenom trop court !.",
  }),
  Nom: z.string().min(2, {
    message: "Nom trop court !.",
  }),
  Age: z.number().int(),
  Adresse: z.string().min(2, {
    message: "Mettez une adresse valide !.",
  }),
  Telehone: z.string().min(2, {
    message: "Mettez une valeur valide !.",
  }),
  situation: z.string().min(2, {
    message: "Mettez une valeur valide !.",
  }),
})

const CreerDossierForm=()=> {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
     Prenom: "",
     Nom: "",
     Age:0,
     Addresse:"",
    //  Telephone :"",
    //  Statut_Matrimonial : "Celibataire" | "Marie" ,
    },
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit(form.getValues()))} className="space-y-5 ">
       
      <FormField
        
          control={form.control}
          name="Prenom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prenom</FormLabel>
              <FormControl>
                <Input placeholder="Prenom" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> 
        <FormField
        control={form.control}
        name="Nom"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nom</FormLabel>
            <FormControl>
              <Input placeholder="Nom" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
       <FormField
          control={form.control}
          name="Age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" placeholder="age" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="Adresse"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse</FormLabel>
              <FormControl>
                <Input placeholder="Adresse" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Telepgone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numero de Telephone</FormLabel>
              <FormControl>
                <Input placeholder="Telephone" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="situation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Situation Matrimonile</FormLabel>
              <FormControl>
                <Input placeholder="Celibataire" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default CreerDossierForm
