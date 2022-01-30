import {query, Request, Response} from "express";

import {Pet} from "../models/Pet";
import {createMenuObject} from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {

    let name = req.query.q as string;

    if(!name){
      res.redirect("/");
      return;
    }

    let list = Pet.getFromName(name);

    res.render('pages/page', {
      list,
      menu: createMenuObject(''),
    })
}
