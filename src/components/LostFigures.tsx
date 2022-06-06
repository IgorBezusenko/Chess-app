import {FC} from 'react';
import {Figure} from "../models/figures/Figure";

interface LostFigureProps {
    title: string;
    figures: Figure[]
}

const LostFigures: FC<LostFigureProps> = ({title, figures}) => {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map(figure => <div>
                {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} alt={figure.name}/>}
            </div>)}
        </div>
    );
};

export default LostFigures;
