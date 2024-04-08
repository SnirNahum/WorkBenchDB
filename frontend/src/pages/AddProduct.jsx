import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

export default function HelperTextMisaligned({ response, onChange, onLink, onPrice }) {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImageLink, setProductImageLink] = useState('');
    const [productHashTags, setProductHashTags] = useState('');

    useEffect(() => {
        if (response) {
            let description = `${response.tldr}${response.itemPrice}$\n`;
            description += `${response.itemLink}\n\n`;
            description += `${response.item_description_top}\n\n`;
            description += `${response.keyFeatures}\n`;
            if (response.item_features?.length > 0) {
                description += response.item_features.map(item => item.features).join('\n') + '\n';
            }
            description += `${response.item_description_bottom}\n\n`;
            description += `${response.orderNow}${response.itemLink}\n\n`;
            description += `${response.dealPrice}${response.itemPrice}$\n\n`;
            description += `${response.item_offer}\n\n`;
            description += `${response.item_hashtags}`;

            setProductName(response.title);
            setProductPrice(response.itemPrice + '$');
            setProductDescription(description);
            setProductImageLink(response.itemLink);
            setProductHashTags(response.item_hashtags);
        }
    }, [response]);

    function handleChange(event, label) {
        const value = event.target.value;
        switch (label) {
            case 'product-name':
                setProductName(value);
                onChange(value)
                break;
            case 'product-price':
                setProductPrice(value);
                onPrice(value)
                break;
            case 'product-description':
                setProductDescription(value);
                break;
            case 'product-image-link':
                setProductImageLink(value);
                onLink(value)
                break;
            case 'product-hashtags':
                productHashTags(value);
                break;
            default:
                break;
        }
    }

    return (
        <div className='add-product-container'>
            <div className='add-product-form'>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        '& > :not(style)': { m: 1 },
                    }}
                >
                    <TextField className="demo-helper-text-aligned-no-helper" label="Product Name" value={productName} onChange={(e) => handleChange(e, "product-name")} />
                    <TextField className="demo-helper-text-misaligned-no-helper" label="Product Price" value={productPrice} onChange={(e) => handleChange(e, "product-price")} />
                    <TextField id="outlined-multiline-static" label="Product Description" multiline rows={16} value={productDescription} onChange={(e) => handleChange(e, "product-description")} />
                    <TextField className="demo-helper-text-misaligned-no-helper" label="Image Link" value={productImageLink} onChange={(e) => handleChange(e, "product-image-link")} />
                    <TextField className="demo-helper-text-misaligned-no-helper" label="Product HashTags" value={productHashTags} onChange={(e) => handleChange(e, "product-hashtags")} />
                </Box>
            </div>
        </div>
    );
}
