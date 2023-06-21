<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $userId = $this->user()->id;

        if ($this->user()->role === 'talent') {
            return [
                'name' => ['string', 'max:255'],
                'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($userId)],
                'nim' => ['required', 'integer', 'min:8'],
                'prodi' => ['required', 'string', 'max:255'],
                'phone_number' => ['required', 'integer', 'min:8'],
                'skill' => ['required', 'string', 'max:255'],
                'image' => ['required', 'image']

            ];
        }

        if ($this->user()->type === 'company') {
            return [
                'name' => ['string', 'max:255'],
                'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($userId)],
                'field2' => ['required', 'integer'], // Additional field specific to user2
            ];
        }
        return [
            'name' => ['string', 'max:255'],
            'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
        ];
    }
}
